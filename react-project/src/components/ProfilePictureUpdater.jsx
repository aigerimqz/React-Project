import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

export default function ProfilePictureUpdater({ user }) {
  const [avatar, setAvatar] = useState(
    "https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
  );
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchAvatar() {
      if (!user) return;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists() && docSnap.data().avatar) {
        setAvatar(docSnap.data().avatar);
      }
    }
    fetchAvatar();
  }, [user]);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file (jpg/png).");
      return;
    }

    setSelectedFile(file);


    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setLoading(true);

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result;

      const docRef = doc(db, "users", user.uid);
      await setDoc(docRef, { avatar: base64String }, { merge: true });

      setAvatar(base64String);
      setSelectedFile(null);
      setPreview(null);
      setLoading(false);
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <div className="profile-avatar-updater">
      <img src={preview || avatar} alt="Profile" className="profile__ava" />
      <div>
        <label className="upload-btn">
          Select File
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            style={{ display: "none" }}
          />
        </label>
        {selectedFile && (
          <button onClick={handleUpload} disabled={loading}>
            {loading ? "Uploading..." : "Upload"}
          </button>
        )}
      </div>
    </div>
  );
}
