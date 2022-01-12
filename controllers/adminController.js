import { v4 as uuid } from 'uuid';

const blogs = [
    {
        id:uuid(),
        image: "https://cdn.pixabay.com/photo/2021/11/13/23/06/tree-6792528__340.jpg",
        title: "How to learn html and css1",
        subTitle: "This is a good course the beginner in html and css",
        desrciption: "We designed HTML & CSS Is Hard to be the only introduction to HTML and CSS that you’ll ever need. If you put in the effort to read every section and write every code snippet, this tutorial has the potential to replace hundreds or even thousand of dollars worth of online courses and live training."
    },
    {
        id:uuid(),
        image: "https://cdn.pixabay.com/photo/2021/11/13/23/06/tree-6792528__340.jpg",
        title: "How to learn html and css2",
        subTitle: "This is a good course the beginner in html and css",
        desrciption: "We designed HTML & CSS Is Hard to be the only introduction to HTML and CSS that you’ll ever need. If you put in the effort to read every section and write every code snippet, this tutorial has the potential to replace hundreds or even thousand of dollars worth of online courses and live training."
    },
    {
        id:uuid(),
        image: "https://cdn.pixabay.com/photo/2021/11/13/23/06/tree-6792528__340.jpg",
        title: "How to learn html and css3",
        subTitle: "This is a good course the beginner in html and css",
        desrciption: "We designed HTML & CSS Is Hard to be the only introduction to HTML and CSS that you’ll ever need. If you put in the effort to read every section and write every code snippet, this tutorial has the potential to replace hundreds or even thousand of dollars worth of online courses and live training."
    },
    {
        id:uuid(),
        image: "https://cdn.pixabay.com/photo/2021/11/13/23/06/tree-6792528__340.jpg",
        title: "How to learn html and css4",
        subTitle: "This is a good course the beginner in html and css",
        desrciption: "We designed HTML & CSS Is Hard to be the only introduction to HTML and CSS that you’ll ever need. If you put in the effort to read every section and write every code snippet, this tutorial has the potential to replace hundreds or even thousand of dollars worth of online courses and live training."
    }
    
];

const getBlogs = (req,res) => {
    res.json(blogs);
}


// exports.getBlogs = getBlogs;

export default { getBlogs }
