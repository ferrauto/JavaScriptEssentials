const containter = document.getElementById("articles");

let xhr = new XMLHttpRequest();
let url = "./data.json";

// (..., ..., [arg]) -> the argument means to make it async (true) or not (false)
xhr.open("GET",url,true);
xhr.responseType = "json";

xhr.onload = ()=>{
    let articles = xhr.response.articles;

    articles.forEach(article => {
        
        // Create container
        const artContainer = document.createElement("div");
        artContainer.classList.add("article");

        // Create the article title
        const title = document.createElement("h2");
        title.textContent = article.title;

        // Create the article description
        const desc = document.createElement("p");
        desc.textContent = article.description;


        // Create the sections "Ways to achive"

        // Create the section title
        const sectionTitle = document.createElement("h3");
        sectionTitle.textContent = "Ways to Achive:";

        // Create the section list
        const sectionList = document.createElement("ul");
        CreateSectionList(article.ways_to_achieve, sectionList);


        // Create the section "Benefits"

        // Create section title
        const section2Title = document.createElement("h3");
        section2Title.textContent = "Benefits:";

        // Create the section list
        const section2List = document.createElement("ul");
        CreateSectionList(article.benefits, section2List);

        
        //Add all to article container
        artContainer.appendChild(title); 
        artContainer.appendChild(desc); 
        artContainer.appendChild(sectionTitle); 
        artContainer.appendChild(sectionList); 
        artContainer.appendChild(section2Title); 
        artContainer.appendChild(section2List); 

        // Add article container into the general container
        containter.appendChild(artContainer);
    });
};

function CreateSectionList(array, sectionList){
    array.forEach((item)=>{
        const li = document.createElement("li");
        li.textContent = item;
        sectionList.appendChild(li);
    });
}

xhr.send();