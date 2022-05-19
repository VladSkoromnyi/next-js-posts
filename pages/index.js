import Head from 'next/head';
import { useEffect, useState } from 'react';
import FormEdit from './components/FormEdit/FormEdit';
import TablePost from './components/TablePosts/TablePosts';
import { dataFromServer } from './api';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default function Home() {
  const [posts, setPosts] = useState(null);

  const [oldTitle, setOldTitle] = useState('');
  const [oldComment, setOldComment] = useState('');
  const [oldUserId, setOldUserId] = useState('');

  const [changingId, setChangingId] = useState('')
  const [isShowEditor, setIsShowEditor] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}/posts`);
      const data = await response.json();

      setPosts(data);
    }

    fetchData();
  }, [])

  const deletePost = async (postId) => {
    if (window.confirm('Are you sure?')) {
      const res = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: "DELETE"
      });

      switch (true) {
        case res.status === 200:
          setPosts((prevState) => prevState.filter(item => item.id !== postId));
          break;
        case res.status === 400:
        case res.status === 500:
          alert('Error');
          break;
        default:
          break;
      }
    }
  }

  const handlerEdit = (
    id,
    userId,
    title,
    body,
  ) => {
    setOldTitle(title);
    setOldComment(body);
    setOldUserId(userId);
    setChangingId(id);
    setIsShowEditor(true);
  }

  const handlerSubmit = async (event) => {
    event.preventDefault();

    if (window.confirm('Are you sure?')) {
      const res = await fetch(`${BASE_URL}/posts/${changingId}`, {
        method: "PUT",
        body: JSON.stringify({
          userId: oldUserId,
          id: changingId,
          title: oldTitle,
          body: oldComment,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      switch (true) {
        case res.status === 200:
          setPosts((prevState) => {
            return prevState.map(item => {
              if (item.id === changingId) {
                return {
                  userId: oldUserId,
                  id: item.id,
                  title: oldTitle,
                  body: oldComment,
                };
              }
  
              return item;
              })}
            )
          break;
        case res.status === 400:
        case res.status === 500:
          alert('Error');
          break;
        default:
          break;
      }
    }

    setOldTitle('');
    setOldComment('');
    setOldUserId('');
    setChangingId('');
    setIsShowEditor(false)
  }

  return (
    <div className="container">
      <Head>
        <title>Table of comments</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main className="Main">
        <h1 className="Main__title">
          Posts from server:
        </h1>

        {isShowEditor && (
          <FormEdit 
            handlerSubmit={(event) => handlerSubmit(event)}
            setOldUserId={setOldUserId}
            setOldTitle={setOldTitle}
            setOldComment={setOldComment}

            oldUserId={oldUserId}
            oldTitle={oldTitle}
            oldComment={oldTitle}
          />       
        )}

        <TablePost 
          posts={posts}
          deletePost={deletePost}
          handlerEdit={handlerEdit}
        />
      </main>

      <footer className="Footer">

      </footer>
    </div>
  )
}
