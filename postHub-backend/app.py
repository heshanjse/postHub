import sqlite3
from flask import request ,jsonify
from flask import Flask, Response

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, World!'

# Route to add a new record (insert) post data to the database
@app.route('/add', methods=['POST'])
def add():
    if request.method == 'POST':
        try:
            uid = 111
            data = request.get_json()
            body = data['body']
            with sqlite3.connect('database.db') as con:
                cur = con.cursor()
                cur.execute("INSERT INTO POSTS (UID, BODY) VALUES (?, ?)", (uid, body))
                con.commit()
                msg = "Record successfully added"
                return jsonify({'message': str(msg)}), 200
        except Exception as e:            
            con.rollback()
            msg = "Error in insert operation"
            return jsonify({'error': str(msg)}), 500
        finally:
            con.close()
            # return jsonify({'error': str(msg)}), 500
            


# Route to view all records (select) from the database
@app.route('/view')
def list():
    con = sqlite3.connect('database.db')
    con.row_factory = sqlite3.Row
    cur = con.cursor()
    cur.execute("SELECT * FROM POSTS")
    rows = cur.fetchall()
    con.close()
    rows_as_dict = [dict(row) for row in rows]

    index = 0  
    response_array = [] 
    while index < len(rows_as_dict):
        element = {}
        row = rows_as_dict[index];
        element['text'] = row['BODY']
        element['index'] = row['ID']
        response_array.append(element)
        index = index + 1
    return jsonify({'data': response_array}), 200



# Route to update a record (update) in the database
@app.route('/update', methods=['POST'])
def update():
    if request.method == 'POST':
        try:
            uid = 111
            id = request.form['id']
            body = request.form['body']

            with sqlite3.connect('database.db') as con:
                cur = con.cursor()
                cur.execute("UPDATE POSTS SET UID=?, BODY=? WHERE ID=?", (uid, body, id))
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
            uid = 111
            data = request.get_json()
            id = data['id']
            with sqlite3.connect('database.db') as con:
                cur = con.cursor()
                cur.execute("DELETE FROM POSTS WHERE id=? AND uid=?", (id,uid))
                con.commit()
                msg = "Record successfully deleted"
                return jsonify({'message': str(msg)}), 200
        except:
            con.rollback()
            msg = "Error in delete operation"
            return jsonify({'error': str(msg)}), 500
        finally:
            con.close()



# @app.route('/add', methods=['POST'])
# def add():
#     if request.method == 'POST':
#         try:
#             uid = 111
#             data = request.get_json()
#             body = data['body']
#             with sqlite3.connect('database.db') as con:
#                 cur = con.cursor()
#                 cur.execute("INSERT INTO POSTS (UID, BODY) VALUES (?, ?)", (uid, body))
#                 con.commit()
#                 msg = "Record successfully added"
#                 return jsonify({'message': str(msg)}), 200
#         except Exception as e:            
#             con.rollback()
#             msg = "Error in insert operation"
#             return jsonify({'error': str(msg)}), 500
#         finally:
#             con.close()
#             # return jsonify({'error': str(msg)}), 500
            






