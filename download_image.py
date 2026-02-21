import urllib.request

url = "https://workspace-assets-usercontent.storage.googleapis.com/photo/82abf8ec233be538df5b30bd27acb1df388e6a5b61ba76d49ca8764b8bbcaace?generation=1740120935544710&alt=media"
urllib.request.urlretrieve(url, "d:/Clarify/clarifai/public/student-studying.png")
print("Image downloaded successfully!")
