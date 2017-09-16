const editorConfig = {
  placeholder: "edit content...",
  spellChecker: false,
  autofocus: false,
  autosave: {
    enabled: false,
    uniqueId: `article`,
    delay: 1000
  },
  renderingConfig:{
    codeSyntaxHighlighting : true
  }
};

export default editorConfig;