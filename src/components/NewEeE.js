idp = 3;
    const [pokupki, setPokupki] = useState(() => [
        { id: 1, name: 'Priv', isComplete: false },
        { id: 2, name: 'Hello', isComplete: false }
    ])

    const [text, setText] = useState('')

    changeText = text => setText(text)

    const addPokupki = () => {
        if (text.length > 0) {

            setPokupki([
                ...pokupki,
                { id: idp, name: text, isComplete: false }
            ])
            idp++;
        }
        setText('')
    }
