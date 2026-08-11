import "./LatestPost.css"
import { useEffect, useState } from "react";
import type { PostIndex } from "../../../interfaces/postIndex";
import { LatestPostsService } from "../../../services/postService";
import FileIcon from "../../Icons/FileIcon";
import Button from './Button';

export default function LatestPosts() {

    const [latestPosts, setLatestPosts] = useState<PostIndex>([]);

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
                  <li key={i} className="latest-post">
                    <Button
                      goTo={`/?post=${post.slug}`}
                      icon={<FileIcon size='2rem' padding='0rem' stroke='var(--white)'/>}
                      text={post.title}
                    />
                  </li>
                )
              )
            }
          </ul>
        </>
    )
}