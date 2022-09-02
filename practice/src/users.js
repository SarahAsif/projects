import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const Users = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  let posti = `https://api.github.com/users/${id}`;
  useEffect(() => {
    axios
      .get(posti)
      .then((res) => {
        setPost(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>hi</h1>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <div>{post.login}</div>
      <div>{posti}</div>
      <ul>
        {post.map((e) => (
          <li key={e.id}>{e.url}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
