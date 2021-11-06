import Post from "./Post"

const posts = [
    {
        id: '123',
        username: "deveshtripath",
        userImg: "https://links.papareact.com/ocw",
        img: "https://links.papareact.com/ocw",
        caption: "Best of The best",
    },
    {
        id: '124',
        username: "deveshtripath",
        userImg: "https://links.papareact.com/ocw",
        img: "https://links.papareact.com/ocw",
        caption: "Best of The best",
    },
    {
        id: '125',
        username: "deveshtripath",
        userImg: "https://links.papareact.com/ocw",
        img: "https://links.papareact.com/ocw",
        caption: "Best of The best",
    },
    {
        id: '126',
        username: "deveshtripath",
        userImg: "https://links.papareact.com/ocw",
        img: "https://links.papareact.com/ocw",
        caption: "Best of The best",
    },
    {
        id: '127',
        username: "deveshtripath",
        userImg: "https://links.papareact.com/ocw",
        img: "https://links.papareact.com/ocw",
        caption: "Best of The best",
    },
]

function Posts() {
    return (
        <div>
        {posts.map((post) =>(
            <Post key={post.id} id={post.id}
            username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
        ))}
            
        </div>
    )
}

export default Posts
