# React Components

This React Project built a number of components, with the aim being to be able to reutilize each of them in future projects. 

The components were given a baseline of styling, as the focus was more on functionality than styling because of this goal, as the components would be styled according to their specific purposes in future projects.

## Installation / Setup

```bash
  "packages": {
    "": {
      "dependencies": {
        "immer": "^10.0.3",
        "react-icons": "^4.11.0",
        "tailwind-merge": "^2.0.0"
      }
    },
```

```bash
cd comps
npm install
```

```bash
npm start
```

## Pages / Components
### Dropdown
![Screenshot (416)](https://github.com/wells1989/Components-React-Project/assets/122035759/bef5e340-a466-4b64-ab72-405d202ee8a6)

```javascript
  const options = [
    { label: "Red", value: 'red' },
    { label: "Green", value: 'green'},
    { label: "Blue", value: 'blue'},
  ]

const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option)
  }

return <DropDown options={options} value={selection} onChange={handleSelect}/>
```

### Accordion
![Screenshot (417)](https://github.com/wells1989/Components-React-Project/assets/122035759/f3f79c8b-d4cf-46ca-b3c9-e2eb859343e6)

```javascript
const items = [
    {
      id: 1,
      label: "label 1",
      content: "this is a test for content 1, writing it longer to check dropdown box sizing etc"
    },
    {
      id: 2,
      label: "label 2",
      content: "this is a test for content 2, writing it longer to check dropdown box sizing etc"
    },
    {
      id: 3,
      label: "label 3",
      content: "this is a test for content 3, writing it longer to check dropdown box sizing etc"
    }
  ];

return <Accordion items={items} />
```

### Buttons
![Screenshot (419)](https://github.com/wells1989/Components-React-Project/assets/122035759/5cf16516-2af1-4cd1-80df-23f913279f0e)

#### Button props
- 1 of: primary / secondary / success / warning / danger
- outline
- rounded
- onClick

Example:
```javascript
return <Button className="flex justify-center" primary outline rounded onClick={handleClick}>
```

### Modal
![Screenshot (421)](https://github.com/wells1989/Components-React-Project/assets/122035759/93fe00bb-5a6c-4ede-b30b-81491b201b0d)

```javascript

const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(!showModal)
    }

    const actionBar = <div className="flex m-3 absolute bottom-5 m-2 justify-between"  >
                        <Button className="m-2" primary rounded onClick={handleClick}>I accept</Button>
                        <Button className="m-2" danger rounded onClick={handleClick}>I Decline</Button>
                    </div>

const modal = <Modal onClose={handleClick}
        actionBar={actionBar}
        >
        <p>Please read and confirm the T + C before proceeding</p>
        </Modal>

    return (
    <div>
        <Button primary rounded onClick={handleClick}>Open Modal</Button>
        {showModal && modal} 
    </div>
    )
```

### Table 
![Screenshot (422)](https://github.com/wells1989/Components-React-Project/assets/122035759/4434ead6-6c25-427c-90de-b02adb7859ed)

#### With Sorting Mechanisms
![Screenshot (423)](https://github.com/wells1989/Components-React-Project/assets/122035759/444eb023-7c63-4437-b78f-a7d33f5dcb3e)
![Screenshot (424)](https://github.com/wells1989/Components-React-Project/assets/122035759/82f6675e-d298-4615-86f4-19c29a20537a)

```javascript
const data = [
        {name: "Orange", color: "bg-orange-500", score: 5},
        {name: "Apple", color: "bg-red-500", score: 3},
        {name: "Banana", color: "bg-yellow-500", score: 1},
        {name: "Lime", color: "bg-green-500", score: 4},
    ];

    const config = [
        { 
            label: "Name", 
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
        },
        {
            label: "Color",
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />
        },
        { 
            label: "Score",
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score 
        }
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    };

return <div>
        <Table data={data} config={config} keyFn={keyFn}/>
        <br></br>
        <SortableTable data={data} config={config} keyFn={keyFn}/>
        </div>
}
```

### Counter
![Screenshot (425)](https://github.com/wells1989/Components-React-Project/assets/122035759/a1987ebb-9c73-479e-a967-acefd1f39bd3)


## Project aims / notes
### Aims:
1. To create a reusable set of components with full functionality
2. To limit styling in order to allow future personalisation of the components
3. To utilize and revise a number of advanced React concepts

### Notes:
- Due to the 3rd aim above, in certain areas components were created instead of using built in React functionality (for instance the useNavigation hook and the Link component were deliberately built to deepen my understanding of how these functions work in React.)
- In addition, as the purpose of the project was to practice a range of React concepts, there is at times an inconsistency with some technologies used (for instance in the CounterPage.js file, which focused on useReducer instead of the other components, which utilized useState.)
