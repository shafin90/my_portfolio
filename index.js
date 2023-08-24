const first_show_page = document.getElementById('first-show-page');
const first_show_page_button = document.getElementById('first-show-page-button');
const banner = document.getElementById('banner');
const banner_image = document.getElementById("banner-image");
const banner_image_cover = document.getElementById('banner-image-cover');
const banner_heading_name = document.getElementById('banner-heading-name');
const designation = document.getElementById('designation');
const bio= document.getElementById('bio-details')
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
const progress_fill_next = document.getElementById('progress-fill-next');
const progress_fill_node = document.getElementById('progress-fill-node');
const progress_fill_express = document.getElementById('progress-fill-express');
const progress_fill_mongodb = document.getElementById('progress-fill-mongodb');
const progress_fill_redux = document.getElementById('progress-fill-redux');
const progress_fill_typescript = document.getElementById('progress-fill-typescript');



first_show_page.addEventListener('click', () => {
    first_show_page_button.style.display = 'none';
    first_show_page.style.height = '0px';
    first_show_page.style.transition = '0.3s';
    setTimeout(() => {
        banner_image_cover.style.height = "0vw";
        banner_image_cover.style.transition = '0.4s';
    }, 400)
})



for(item of bio_button){
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
        

        bio.scrollIntoView({ behavior: 'smooth' });
    })
}




for(item of banner_btn){
    item.addEventListener('click',()=>{
        banner.scrollIntoView({ behavior: 'smooth' });
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
for(item of skillsett){
    item.addEventListener('click',()=>{
        skill_div.scrollIntoView({ behavior: 'smooth' });
        progress_fill_html.style.width='38vw';
        progress_fill_html.style.transition='2s';

        progress_fill_css.style.width='35vw';
        progress_fill_css.style.transition='2s';



        progress_fill_javascript.style.width='37vw';
        progress_fill_javascript.style.transition='2s';


        progress_fill_bootstrap.style.width='35vw';
        progress_fill_bootstrap.style.transition='2s';


        progress_fill_tailwind.style.width='30vw';
        progress_fill_tailwind.style.transition='2s';


        progress_fill_react.style.width='38vw';
        progress_fill_react.style.transition='2s';



        progress_fill_next.style.width='30vw';
        progress_fill_next.style.transition='2s';
        
        
        progress_fill_node.style.width='25vw';
        progress_fill_node.style.transition='2s';


        progress_fill_express.style.width='35vw';
        progress_fill_express.style.transition='2s';



        progress_fill_mongodb.style.width='30vw';
        progress_fill_mongodb.style.transition='2s';

        progress_fill_redux.style.width='30vw';
        progress_fill_redux.style.transition='2s';


        progress_fill_typescript.style.width='25vw';
        progress_fill_typescript.style.transition='2s';
    })
}


// lets work with project btn
for(item of projects){
    item.addEventListener('click',()=>{
        project_div.scrollIntoView({ behavior: 'smooth' });

    })
}











for(item of contact_information){
    item.addEventListener('click',()=>{
        contact_information_div.scrollIntoView({ behavior: 'smooth' });
    })
}




