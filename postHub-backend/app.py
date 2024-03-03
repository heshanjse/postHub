import sqlite3
from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, World!'

# Route to add a new record (insert) post data to the database
@app.route('/add', methods=['POST'])
def add():
    if request.method == 'POST':
        try:
            title = 'title'
            body = request.form['body']
            with sqlite3.connect('database.db') as con:
                cur = con.cursor()
                cur.execute("INSERT INTO POSTS (title, body) VALUES (?, ?)", (title, body))
                con.commit()
                msg = "Record successfully added"
        except:
            con.rollback()
            msg = "Error in insert operation"
        finally:
            con.close()
            return msg
            


# Route to view all records (select) from the database
@app.route('/view')
def list():
    con = sqlite3.connect('database.db')
    con.row_factory = sqlite3.Row
    cur = con.cursor()
    cur.execute("SELECT * FROM POSTS")
    rows = cur.fetchall()
    con.close()
    return rows;


# Route to update a record (update) in the database
@app.route('/update', methods=['POST'])
def update():
    if request.method == 'POST':
        try:
            id = request.form['id']
            title = 'title'
            body = request.form['body']
            with sqlite3.connect('database.db') as con:
                cur = con.cursor()
                cur.execute("UPDATE POSTS SET title=?, body=? WHERE id=?", (title, body, id))
                con.commit()
                msg = "Record successfully updated"
        except:
            con.rollback()
            msg = "Error in update operation"
        finally:
            con.close()
            return msg
        
# Route to delete a record (delete) from the database
@app.route('/delete', methods=['POST'])
def delete():
    if request.method == 'POST':
        try:
            id = request.form['id']
            with sqlite3.connect('database.db') as con:
                cur = con.cursor()
                cur.execute("DELETE FROM POSTS WHERE id=?", (id))
                con.commit()
                msg = "Record successfully deleted"
        except:
            con.rollback()
            msg = "Error in delete operation"
        finally:
            con.close()
            return msg







