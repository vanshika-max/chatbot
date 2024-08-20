# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import json

# app = Flask(__name__)
# CORS(app)  # This will enable CORS for all routes

# # Load data from a JSON file
# with open('data.json', 'r') as file:
#     data = json.load(file)

# # Define the chat route
# @app.route('/chat', methods=['POST'])
# def chat():
#     user_input = request.json.get('message')
#     response = data.get(user_input.lower(), "Sorry, I don't understand that.")
#     return jsonify({"response": response})

# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

# Load data from the JSON file
def load_data():
    with open('data.json', 'r') as file:
        return json.load(file)

# Save data to the JSON file
def save_data(data):
    with open('data.json', 'w') as file:
        json.dump(data, file, indent=4)

# Initial data loading
data = load_data()

# Chat route
@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message').lower()
    response = "Sorry, I don't understand that."

    # Check for keywords in the user input
    for keyword in data:
        if keyword in user_input:
            response = data[keyword]
            break

    return jsonify({"response": response})

# Add new data route
@app.route('/add_data', methods=['POST'])
def add_data():
    new_input = request.json.get('input').lower()
    new_response = request.json.get('response')
    data[new_input] = new_response
    save_data(data)
    return jsonify({"message": "New data added successfully!"})

if __name__ == '__main__':
    app.run(debug=True)
