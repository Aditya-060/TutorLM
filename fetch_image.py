import urllib.request

# The image path provided by the google workspace proxy
url = "https://workspace-assets-usercontent.storage.googleapis.com/photo/82abf8ec233be538df5b30bd27acb1df388e6a5b61ba76d49ca8764b8bbcaace?generation=1740120935544710&alt=media"

# Need to add headers because sometimes google blocks raw python urllib requests
opener = urllib.request.build_opener()
opener.addheaders = [('User-agent', 'Mozilla/5.0')]
urllib.request.install_opener(opener)

try:
    urllib.request.urlretrieve(url, "d:/Clarify/clarifai/public/student-studying.png")
    print("Downloaded successfully!")
except Exception as e:
    print(f"Failed to download: {e}")
