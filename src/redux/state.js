import {rerenderEntireTree} from '../render'
let state = {

    profilePage: {
        posts: [
            { id: 1, message: 'Mmm,Hi...', counts: 5 },
            { id: 2, message: 'Hi, Mr.Fox, where is my chicken?', counts: 3 },
            { id: 3, message: "I don't now,I'am still hungrry...", counts: 21 },
        ]
    },
    dialogsPage: {

        messages: [
            { id: 1, text: 'What`s uuuuuuup!!!!' },
            { id: 2, text: 'Niiiice!!!!' },
            { id: 3, text: 'Yeahhhhh...' },
            { id: 4, text: 'YO!!!' },
        ],

        dialogs: [
            { id: 1, name: 'first' },
            { id: 2, name: 'second' },
            { id: 3, name: 'third' },
            { id: 4, name: 'fourth' }
        ]
    }

}

export let addPost = (postMessage) => {
 
    let newPost = {
        id:5,
        message: postMessage,
        counts: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state
