const first_show_page = document.getElementById('first-show-page');
const first_show_page_button = document.getElementById('first-show-page-button');

const banner = document.getElementById('banner');
const banner_image = document.getElementById("banner-image");
const banner_image_cover = document.getElementById('banner-image-cover');
const banner_heading_name = document.getElementById('banner-heading-name');
const designation = document.getElementById('designation');

const bio = document.getElementById('bio-details')

const project_div = document.getElementById('project-div');

const contact_information_div = document.getElementById('contact-information-div');

// Button
const banner_btn = document.getElementsByClassName('banner-btn');
const bio_button = document.getElementsByClassName('bio-btn');
const skillset = document.getElementsByClassName('skillset-btn');
const projects = document.getElementsByClassName('projects-btn');
const contact_information = document.getElementsByClassName('contact-information-btn');
const skillsett = document.getElementsByClassName('skillset-btn');

// div declaration
const skill_div = document.getElementById('skill-div');

// project fill up bar
const progress_fill_html = document.getElementById('progress-fill-html');
const progress_fill_css = document.getElementById('progress-fill-css');
const progress_fill_javascript = document.getElementById('progress-fill-javascript');
const progress_fill_bootstrap = document.getElementById('progress-fill-bootstrap');
const progress_fill_tailwind = document.getElementById('progress-fill-tailwind');
const progress_fill_react = document.getElementById('progress-fill-react');
// const progress_fill_next = document.getElementById('progress-fill-next');
const progress_fill_node = document.getElementById('progress-fill-node');
const progress_fill_express = document.getElementById('progress-fill-express');
const progress_fill_mongodb = document.getElementById('progress-fill-mongodb');
// const progress_fill_redux = document.getElementById('progress-fill-redux');
// const progress_fill_typescript = document.getElementById('progress-fill-typescript');



const redirect_link = document.getElementsByClassName('redirect-link');//This class catch all the redirects button like, resume download, github, live site, server site.....
// sound declaration
const clickSound = document.getElementById("clickSound");
const navigateSound = document.getElementById("navigateSound");
const redirectNavigateSound = document.getElementById("linkRedirectSound");







for(item of redirect_link){
    item.addEventListener('click',()=>{
        redirectNavigateSound.play();

    })
}



// resume download
document.getElementById("downloadButton").addEventListener("click", function () {

    let filename = "resume.pdf";

    // Replace 'path_to_resume' with the actual path to your resume file
    let path = "./resume/" + filename;

    let link = document.createElement("a");
    link.href = path;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
document.getElementById("downloadButtonn").addEventListener("click", function () {
    
    let filename = "resume.pdf";

    // Replace 'path_to_resume' with the actual path to your resume file
    let path = "./resume/" + filename;

    let link = document.createElement("a");
    link.href = path;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});







// github redirected
document.getElementById("github-btn").addEventListener("click", function() {
    clickSound.play();
    window.location.href = "https://github.com/shafin90"; // Replace with your GitHub profile URL
});
document.getElementById("github-btnn").addEventListener("click", function() {
    clickSound.play();
    window.location.href = "https://github.com/shafin90"; // Replace with your GitHub profile URL
});





// LinkedIn redirected
document.getElementById("linkedIn-btn").addEventListener("click", function() {
    clickSound.play();
    window.location.href = "https://www.linkedin.com/in/mashrafi-ahnam-45650b264/"; // Replace with your GitHub profile URL
});





















//all page's cover
const bio_page_cover = document.getElementById('bio-page-cover');


let html = 0;
let css = 0;
let javascript = 0;
let bootstrap = 0;
let react = 0;
let next = 0;
let node = 0;
let express = 0;
let mongodb = 0;
let redux = 0;
let typescript = 0;
let tailwind = 0;



const pointIncreaser = () => {


    setInterval(() => {
        if (html < 95) {
            html = html + 1;
            progress_fill_html.innerText = html + '%';
        }
        if (css < 95) {
            css = css + 1;
            progress_fill_css.innerText = css + '%';
        }


        if (javascript < 90) {
            javascript = javascript + 1;
            progress_fill_javascript.innerText = javascript + '%';
        }



        if (bootstrap < 95) {
            bootstrap = bootstrap + 1;
            progress_fill_bootstrap.innerText = bootstrap + '%';
        }



        if (tailwind < 95) {
            tailwind = tailwind + 1;
            progress_fill_tailwind.innerText = tailwind + '%';
        }



        if (react < 90) {
            react = react + 1;
            progress_fill_react.innerText = react + '%';
        }


        if (node < 80) {
            node = node + 1;
            progress_fill_node.innerText = node + '%';
        }





        if (express < 80) {
            express = express + 1;
            progress_fill_express.innerText = express + '%';
        }




        if (mongodb < 85) {
            mongodb = mongodb + 1;
            progress_fill_mongodb.innerText = mongodb + '%';
        }

    }, 30)





}





// progress-fill work
progress_fill_html.innerText = html;
progress_fill_css.innerText = css;
progress_fill_javascript.innerText = javascript;
progress_fill_bootstrap.innerText = bootstrap;
progress_fill_react.innerText = react;
// progress_fill_next.innerText = next;
progress_fill_node.innerText = node;
progress_fill_express.innerText = express;
progress_fill_mongodb.innerText = mongodb;
progress_fill_tailwind.innerText = tailwind;
// progress_fill_redux.innerText = redux;
// progress_fill_typescript.innerText = typescript;




bio.style.display = 'none';
skill_div.style.display = 'none';
project_div.style.display = 'none';
contact_information_div.style.display = 'none';






first_show_page.addEventListener('click', () => {
    clickSound.play();
    first_show_page_button.style.display = 'none';
    first_show_page.style.height = '0px';
    first_show_page.style.transition = '0.3s';
    banner.style.display = 'flex';
    bio.style.display = 'none';
    skill_div.style.display = 'none';
    project_div.style.display = 'none';
    contact_information_div.style.display = 'none';
    setTimeout(() => {
        banner_image_cover.style.height = "0vw";
        banner_image_cover.style.transition = '0.4s';
    }, 400)
})























for (item of bio_button) {
    item.addEventListener('click', () => {
        // banner_heading_name.style.display = "none";
        // designation.style.display = "none";
        // bio_button.style.display = "none";
        // skillset.style.display = "none";
        // projects.style.display = "none";
        // contact_information.style.display = "none";
        // banner_image.style.display = 'none';
        // banner_image_cover.style.display = 'none'
        // banner.style.width = '0vw'
        // banner.style.transition = '0.4s';
        // setTimeout(() => {
        // document.documentElement.style.scrollBehavior = 'smooth';
        // window.scrollTo(0, screen.height);


        // }, 300)


        // cover-page-activities






        navigateSound.play();

        bio.style.display = 'flex';
        bio.scrollIntoView({ behavior: 'smooth' });
        banner.style.display = 'none';
        skill_div.style.display = 'none';
        project_div.style.display = 'none';
        contact_information_div.style.display = 'none';
    })
}




for (item of banner_btn) {
    item.addEventListener('click', () => {
        // cover-page-activities



        navigateSound.play();

        banner.style.display = 'flex';
        banner.scrollIntoView({ behavior: 'smooth' });
        bio.style.display = 'none';
        skill_div.style.display = 'none';
        project_div.style.display = 'none';
        contact_information_div.style.display = 'none';
    })
}


// banner_btn.addEventListener('click',()=>{
//     setTimeout(() => {
//         document.documentElement.style.scrollBehavior = 'smooth';
//         window.scrollTo(0, 0);
//     }, 300)
//     banner_heading_name.style.display = "block";
//     designation.style.display = "block";
//     bio_button.style.display = "inline-block";
//     skillset.style.display = "inline-block";
//     projects.style.display = "inline-block";
//     contact_information.style.display = "inline-block";
//     banner_image.style.display = 'block';
//     banner_image_cover.style.display = 'block'
//     banner.style.width = '100vw'
//     banner.style.transition = '0.4s';
// })



// lets work with skillset button
for (item of skillsett) {
    item.addEventListener('click', () => {

        // cover-page-activities

        navigateSound.play();

        pointIncreaser();

        skill_div.style.display = 'flex';
        skill_div.scrollIntoView({ behavior: 'smooth' });

        banner.style.display = 'none';
        bio.style.display = 'none';
        project_div.style.display = 'none';
        contact_information_div.style.display = 'none';




        progress_fill_html.style.width = '38vw';
        progress_fill_html.style.transition = '1.5s';

        progress_fill_css.style.width = '38vw';
        progress_fill_css.style.transition = '1.5s';



        progress_fill_javascript.style.width = '37vw';
        progress_fill_javascript.style.transition = '1.5s';


        progress_fill_bootstrap.style.width = '38vw';
        progress_fill_bootstrap.style.transition = '1.5s';


        progress_fill_tailwind.style.width = '38vw';
        progress_fill_tailwind.style.transition = '1.5s';


        progress_fill_react.style.width = '37vw';
        progress_fill_react.style.transition = '1.5s';



        // progress_fill_next.style.width = '30vw';
        // progress_fill_next.style.transition = '2s';


        progress_fill_node.style.width = '35vw';
        progress_fill_node.style.transition = '1.5s';


        progress_fill_express.style.width = '35vw';
        progress_fill_express.style.transition = '1.5s';



        progress_fill_mongodb.style.width = '36vw';
        progress_fill_mongodb.style.transition = '1.5s';

        // progress_fill_redux.style.width = '30vw';
        // progress_fill_redux.style.transition = '2s';


        // progress_fill_typescript.style.width = '25vw';
        // progress_fill_typescript.style.transition = '2s';
    })
}


// lets work with project btn
for (item of projects) {
    item.addEventListener('click', () => {
        // cover-page-activities


        navigateSound.play();



        project_div.style.display = 'flex';
        project_div.scrollIntoView({ behavior: 'smooth' });
        bio.style.display = 'none';
        banner.style.display = 'none';
        skill_div.style.display = 'none';
        contact_information_div.style.display = 'none';

    })
}











for (item of contact_information) {
    item.addEventListener('click', () => {
        // cover-page-activities



        navigateSound.play();



        contact_information_div.style.display = 'flex';
        contact_information_div.scrollIntoView({ behavior: 'smooth' });
        banner.style.display = 'none';
        bio.style.display = 'none';
        skill_div.style.display = 'none';
        project_div.style.display = 'none'
    })
}








const ar = [12,2,3,4]

console.log(isArray(ar))