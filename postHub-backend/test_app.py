import pytest
import sqlite3

from app import app as posthub_app

@pytest.fixture()
def test_app():
    test_app = posthub_app()
    test_app.config.update({
        "TESTING": True,
    })
    return test_app

def test_home_endpoint():
    client = posthub_app.test_client()
    response = client.get('/')
    
    assert response.status_code == 200
    assert response.data.decode('utf-8') == 'Hello, World!'

def test_add_endpoint():
    client = posthub_app.test_client()
    # Prepare data for the request
    data = {'body': 'Test body content'}

    # Make a POST request to the /add endpoint
    response = client.post('/add', json=data)

    # Check the response status code and content
    assert response.status_code == 200
    assert 'message' in response.json
    assert response.json['message'] == 'Record successfully added'

    # check the database to verify the data was inserted
    with sqlite3.connect('database.db') as con:
        cur = con.cursor()
        cur.execute("SELECT * FROM POSTS WHERE UID = 111 AND BODY = ?", (data['body'],))
        result = cur.fetchone()
        assert result is not None
        cur.execute("DELETE FROM POSTS WHERE UID = 111 AND BODY = ?", (data['body'],))
        con.commit()



def test_view_endpoint():
    client = posthub_app.test_client()
    response = client.get('/view')

    assert response.status_code == 200
    assert 'data' in response.json
    assert len(response.json['data']) > 0



def test_delete_endpoint():
    client = posthub_app.test_client()

    # Insert a record into the database
    with sqlite3.connect('database.db') as con:
        cur = con.cursor()
        cur.execute("insert into POSTS (UID, BODY) values (?, ?)", (111, 'Test Delete Endpoint Record'))
        cur.execute("SELECT ID FROM POSTS WHERE UID = 111 AND BODY = 'Test Delete Endpoint Record'")
        result = cur.fetchone()[0]

    # Prepare data for the request
    data = {"index": result}

    # Make a POST request to the /delete endpoint
    response = client.post('/delete', json=data)
    # Check the response status code and content
    assert response.status_code == 200
    assert 'message' in response.json
    assert response.json['message'] == 'Record successfully deleted'

    #check the database to verify the data was deleted
    with sqlite3.connect('database.db') as con:
        cur = con.cursor()
        cur.execute("SELECT * FROM POSTS WHERE ID = ?", (result,))
        result = cur.fetchone()
        assert result is None
