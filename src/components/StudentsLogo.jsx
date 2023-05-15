//
import { useState, useEffect } from "react";

function StudentsLogo() {
  const url =
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature";
  const [data, setData] = useState({});

  const fetchInfo = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data), setData(data);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  if (!data.urls) return null;

  return (
    <div>
      <img className="student-logo" src={data.urls.regular} />
    </div>
  );
}

export default StudentsLogo;