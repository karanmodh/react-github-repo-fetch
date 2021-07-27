import React, { useState } from "react";
import RepoCard from "./RepoCard";

interface repoDetailProp {
    id:number;
    name:string;
    description:string;
}

function Search() {
    const [search, setSearch] = useState<string>("");
    const [repos, setRepos] = useState<repoDetailProp[]>([]);
    
    function handleSubmit(username:string){
        var url:string = `https://api.github.com/users/${username}/repos`;
        fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                setRepos(responseJson)
            });
    }

    return (
        <div>
            <input value={search} onChange={e=> setSearch(e.target.value)} />
            <button onClick={()=>handleSubmit(search)}>Submit</button>
            <hr/>
            {repos.map((repo) => <RepoCard key={repo.id} name={repo.name} description={repo.description}> </RepoCard>)}
        </div>
    );
};

export default Search;