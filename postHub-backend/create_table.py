import sqlite3

# Create a connection to the database
conn = sqlite3.connect('database.db')
print("Connected to database successfully")

# Create a table
conn.execute('''CREATE TABLE POSTS (ID INT PRIMARY KEY NOT NULL, TITLE TEXT, BODY TEXT);''')
print("Table created successfully")

conn.close()
