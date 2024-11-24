import csv
import json

def csv_to_json(csv_file_path, json_file_path):
    data = []
    
    # Open the CSV file and read its contents
    with open(csv_file_path, mode='r', encoding='utf-8') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        # Convert each row into a dictionary
        # Add it to the data list
        for row in csv_reader:
            # Format row into the desired JSON structure
            formatted_row = {
                "id": int(row["id"]),
                "question": row["question"],
                "fullQuestion": row["fullQuestion"],
                "principle": row["principle"],
                "topic": row["topic"],
                "table": {
                    "situation": row["situation"].split(";"),
                    "task": row["task"].split(";"),
                    "action": row["action"].split(";"),
                    "result": row["result"].split(";"),
                }
            }
            data.append(formatted_row)
    
    # Write the list of dictionaries to a JSON file
    with open(json_file_path, mode='w', encoding='utf-8') as json_file:
        json.dump(data, json_file, indent=2, ensure_ascii=False)

# Paths for input CSV and output JSON files
csv_file_path = "./src/data/question_data.csv"
json_file_path = "./src/data/data.json"

# Convert CSV to JSON
csv_to_json(csv_file_path, json_file_path)
print(f"CSV file {csv_file_path} has been converted to JSON file {json_file_path}")
