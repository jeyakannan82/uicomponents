import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
import SpellChecker from "simple-spellchecker"

const { ipcRenderer , electron} = window.require("electron")
export const About = () => {
 SpellChecker.getDictionary("fr-FR", function(err, dictionary) {
      if(!err) {
          var misspelled = ! dictionary.spellCheck('maisonn');
          if(misspelled) {
              var suggestions = dictionary.getSuggestions('maisonn');
          }
      }
  });
  SpellChecker.getDictionary("en-US", "../node_modules/simple-spellchecker/dict", function(err, result) {
      if(!err) {
          myDictionary = result;
      }
  });
  electron.ipcMain.on('checkspell', function(event, word) {
      var res = null;
      if(myDictionary != null && word != null) {
          res = myDictionary.spellCheck(word);
      }
      event.returnValue = res;
  });
return(
electron.webFrame.setSpellCheckProvider("en-US", false, {
    spellCheck: function(text) {
        var res = ipcRenderer.sendSync('checkspell', text);
        return res != null? res : true;
    }
})
);
)

}