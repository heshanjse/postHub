import sqlite3

# Create a connection to the database
conn = sqlite3.connect('database.db')
print("Connected to database successfully")

# Create a table
conn.execute('CREATE TABLE POSTS (ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,UID INTEGER NOT NULL, BODY TEXT);')
print("POSTS Table created successfully")

conn.execute('CREATE TABLE USERS (UID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, USERNAME TEXT,PASSWORD TEXT,NAME TEXT);')
print("USERS Table created successfully")

conn.close()
