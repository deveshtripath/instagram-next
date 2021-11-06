import MiniProfile from "./MiniProfile"
import Posts from "./Posts"
import Stories from "./Stories"
import Suggestions from "./Suggestions"

function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
            {/* Section */}
            <section className="col-span-2">
                    {/* Story */}
                    <Stories/>
                {/* Post */}
                <Posts/>
            </section>
                

            {/* Section */}
            <section className="hidden xl:inline-grid md:col-span-1">
                    {/* Mini profile  */}
                    <div className="fixed top-15">
                    <MiniProfile/>
                    <Suggestions/>
                    </div>
                {/* Suggestion */}
            </section>    


        </main>
    )
}

export default Feed