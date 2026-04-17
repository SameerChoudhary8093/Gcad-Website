import os

def replace_in_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content.replace('/public/', '/')
    
    if content != new_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated: {file_path}")

def walk_and_replace(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.css', '.html')):
                replace_in_file(os.path.join(root, file))

if __name__ == "__main__":
    src_dir = r"c:\Users\samee\OneDrive\Desktop\Gcad-2nd website\src"
    walk_and_replace(src_dir)
    # Also check index.html in the root
    replace_in_file(r"c:\Users\samee\OneDrive\Desktop\Gcad-2nd website\index.html")
