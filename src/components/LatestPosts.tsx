import './LatestPosts.css';
import { useEffect, useState } from "react";
import type { PostIndex } from "../interfaces/post";
import { LatestPostsService } from "../services/postService";
import FileIcon from "./FileIcon";
import { useSearchParams } from 'react-router';
import { randomColorPick } from '../utils/utils';

export default function LatestPosts() {

    const [latestPosts, setLatestPosts] = useState<PostIndex>([]);
    const [_, setSearchParams] = useSearchParams();

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
                        const newParams = new URLSearchParams();
                        newParams.set("post", post.slug);
                        setSearchParams(newParams);
                    }}
                    >
                      <FileIcon size='1.5rem' padding='0rem' stroke='var(--black)'/>{post.name}
                    </div>
                  </li>
                )
              )
            }
          </ul>
        </>
    )
}