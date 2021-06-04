// import { rerenderEntireTree } from '../render'
let rerenderEntireTree =() => {
    console.log('state is changed')
}
let state = {

    profilePage: {
        posts: [
            { id: 1, message: 'Mmm,Hi...', counts: 5 },
            { id: 2, message: 'Hi, Mr.Fox, where is my chicken?', counts: 3 },
            { id: 3, message: "I don't now,I'am still hungrry...", counts: 21 },
        ],
        // newPostText:"some text from State"
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

let newDialogText ='Whatzzzzzz upppppp....'

export const addDialog = () => {
    let newDialog = {
        id: 5,
        text: state.dialogsPage.newDialogText
    }
    state.dialogsPage.messages.push(newDialog),
        state.dialogsPage.newDialogText = '',
        rerenderEntireTree(state)
}

export const updateDialog = (newMessage) => {
    
    state.dialogsPage.newDialogText = newMessage
    rerenderEntireTree(state)
}


export const addPost = () => {

    const newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        counts: 0
    }
    state.profilePage.posts.push(newPost),
        state.profilePage.newPostText = '',
        rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export default state
