import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contactsData: [],
  filterName: '',
}

const contactsSlice = createSlice({
  
  name: "contacts",
  
  initialState: INITIAL_STATE,
  
  reducers: {
    addContact(state, action) {
        state.contactsData.push(action.payload);
    },
    deleteContact(state, action) {
      state.contactsData = state.contactsData.filter(contact => contact.name !== action.payload)
    }, 
    setFilter(state, action) {
      state.filterName = action.payload
      
    },
    
  },
});


export const {addContact, deleteContact, setFilter} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;


// export const contactsReducer = (state=INITIAL_STATE, action) => {
//     if (action.type === 'contacts/setContacts') {
//         return action.payload
//     }
//     return state;
// }

// export const  setContacts = (payload) =>  {
//     return {
//         type: 'contacts/setContacts', 
//         payload
//     }
// }