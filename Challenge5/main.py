import os
from PyPDF2 import PdfReader

# Get the absolute path of the PDF file in the current script's directory


script_directory = os.path.dirname(os.path.abspath(__file__))
pdf_path = os.path.join(script_directory, 'chall.pdf')

# Open the PDF file
pdf_file = open(pdf_path, 'rb')
pdf_reader = PdfReader(pdf_file)

# Read the first page and extract the text
page = pdf_reader.pages[0]
text = page.extract_text()

# Print the extracted text
print(text)

# Close the PDF file
pdf_file.close()
