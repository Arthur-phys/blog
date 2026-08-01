import './LatestPosts.css';
import { useEffect, useState } from "react";
import type { PostIndex } from "../interfaces/postIndex";
import { LatestPostsService } from "../services/postService";
import FileIcon from "./FileIcon";
import { useNavigate } from 'react-router';
import { randomColorPick } from '../utils/utils';

export default function LatestPosts() {

    const [latestPosts, setLatestPosts] = useState<PostIndex>([]);
    const navigate = useNavigate();

    useEffect(() => {
    const retrieveLatestPosts = async () => {
      const latest = await LatestPostsService();
      setLatestPosts(latest);
    }
    retrieveLatestPosts();
  },[]);

    return (
        <>
        <ul>
            {
              latestPosts.map((post, i) => (
                  <li key={i}>
                    <div className={"latest-post" + ` hover-${randomColorPick()}`}
                    onClick={(_) => {
                        navigate(`/?post=${post.slug}`);
                    }}
                    >
                      <FileIcon size='2rem' padding='0rem' stroke='var(--white)'/>{post.title}
                    </div>
                  </li>
                )
              )
            }
          </ul>
        </>
    )
}