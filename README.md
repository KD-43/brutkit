# Brutkit UI-Component Library

Welcome to **Brutkit**, a React UI-component library made to serve the most basic and fundamental UI components styled in a brutalism design theme. It’s simple, effective, and easy to implement into your website. You can seamlessly insert these modular components with as much or as little setup as possible.


## Basics

Each component is designed to be fairly modular, allowing developers to adjust the size and color of rendered elements through passed props, while also allowing for additional modification through class-based styling. We’ll go over the details later on, but there are predefined styles that adhere to the brutalism design theme, so components are not intended to be radically changed. General SCSS styling can be applied to components and markup through the application of ‘style classes’ (basically the same workflow as Bootstrap). So in summary, styling can be done through applying predefined style classes, and specific markup can be rendered through passed props.


## How to install

```bash
npm install brutkit
```


## How to use Components and Stylesheet

Just import any desired components from the library into your React app and apply whatever available styling classes you want! This library uses "CSS Injection by JavaScript," so the tasks of linking and importing stylesheets is not necessary.


## Foundation

Most components have 3 predefined sizes and 5 main color swatches to choose from. Additionally, there are three typefaces tied to the theme that are also included with this library, and are integral to the styling of these components.


### Sizes

Sizes available:  
* `sm`, `md`, `lg`

Though the units may differ depending upon the component, they all follow this same syntax when passing props. Passing these predefined props has the child component return the appropriate markup with a specific size that's made through padding.


**Example Usage:**  
```javascript
import { Button_Component } from './Button';

function App() {
	<Button_Component size="sm"> Click me! </Button_component>
}

export default App
```


### Color

Swatches available:  
* `red`, `darkRed`, `grey`, `black`, `white`

**Example Usage**  
```javascript
function App() {
	<Button_component color="red"> Click me! </Button_component>
}

export default App
```


### Typefaces

There are three distinct typefaces that are utilized for styling:  
* **Special Gothic Condensed One** - Heading Typeface
* **Pirata One** - Display Typeface
* **IBM Plex** - Body Typeface


#### Typeface Classes:  
* `.text-heading`
* `.text-display`
* `.text-body`

All of these typefaces have been included with the package as well, so no additional imports are needed.


---


### Class-based general styling  
Applying styles to custom components or additional markup can be done by inserting the following classes. The naming convention is easily readable, and functions basically like any other CSS framework (like Bootstrap).


#### Color Classes:  
* For text:
	* `.text-red`
	* `.text-darkRed`
	* `.text-grey`
	* `.text-black`
	* `.text-white`

* For background:
	* `.bg-red`
	* `.bg-darkRed`
	* `.bg-grey`
	* `.bg-black`
	* `.bg-grey`


#### Font-size Classes:  
* `fs-1`, `fs-2`, `fs-3`, `fs-4`, `fs-5`

Class names are 1:1 in representing the actual font-size, which are measured in `em`.


#### Spacing Classes:  
This list may not contain ALL of the classes you need to space and format your content. These were the ones I found most useful to have during the development of this library.

* Display:
	* `d-flex`, `d-grid`
* Align:
	* `align-content-center`, `align-items-center`, `align-items-start`, `align-self-center`
* Flex:
	* `flex-column`, `flex-item`
* Place:
	* `place-items-center`
* Justify:
	* `justify-content-btwn`, `justify-content-center`, `justify-content-evenly`
* Width:
	* `w-25`, `w-50`, `w-75`, `w-100`


#### Padding Classes:  
Padding values are in `rem`

* Uniform Padding:
	* `pu-0`, `pu-1`, `pu-2`, `pu-3`, `pu-4`, `pu-5`
* Top Padding:
	* `pt-0`, `pt-1`, `pt-2`, `pt-3`, `pt-4`, `pt-5`  
* Left Padding:
	* `pl-0`, `pl-1`, `pl-2`, `pl-3`, `pl-4`, `pl-5`  
* Bottom Padding:
	* `pb-0`, `pb-1`, `pb-2`, `pb-3`, `pb-4`, `pb-5`  
* Right Padding:
	* `pr-0`, `pr-1`, `pr-2`, `pr-3`, `pr-4`, `pr-5`


#### Margin Classes:  
Margin values are in `rem`

* Uniform Margin:
	* `mu-0`, `mu-1`, `mu-2`, `mu-3`, `mu-4`, `mu-5`
* Top Margin:
	* `mt-0`, `mt-1`, `mt-2`, `mt-3`, `mt-4`, `mt-5`
* Left Margin:
	* `ml-0`, `ml-1`, `ml-2`, `ml-3`, `ml-4`, `ml-5`
* Bottom Margin:
	* `mb-0`, `mb-1`, `mb-2`, `mb-3`, `mb-4`, `mb-5`
* Right Margin:
	* `mr-0`, `mr-1`, `mr-2`, `mr-3`, `mr-4`, `mr-5`


---


## Components  
The following section contains all the information you really need to get started with the library. Its implementation is straightforward, using a basic naming convention to be invoked, and simple, predefined, props in order to render several variations of an element. I will be going in alphabetical order just for the sake of organization.

> [!NOTE]
> Not every single variant for each component will be shown so please refer to the **Foundation** Section for the available sizes and colors.


### Banner  
A colored notification bar that appears fixed at the top of the viewport, with a centered text message and a close button on the right-hand side.

It has 3 different `bannerType`: `success`, `warning`, and `fail`.

All of which will display different background colors and must be triggered by the conditions/parameters you set within the parent component. Additionally, you can change the text message by passing a message prop into the component, allowing you to manage several aspects from one document.


For example, let's say I want each banner variant to display based on the amount of times a button has been clicked. <ins>Once<ins> for `success`, <ins>twice</ins> for `warning`, and <ins>thrice</ins> for `fail`.

```javascript
function App () {
	<BannerComponent
		isOpen={isBannerVisible}
		onClose={hideBanner}
		bannerType={isBannerType}
		successText="Logged In!"
		warningText="Warning! Incorrect password!"
		failText="You failed!"
	/>

	<button onClick={showBanner}>Show Banner</button>
}

export default App
```

Here's how I would set up these functions and variables for this example:

```javascript
function App () {
	const [ isCount, setCount ] = useState(0);
	// Determine if button has been clicked
	const [ isBannerVisible, setIsBannerVisible ] = useState(false);
	// Is the Banner showing?
	const [ isBannerType, setBannerType ] = useState('');
	// What's the Banner Type? Success? Warning? or Fail?
	const [ isBannerText, setBannerText ] = useState('');
	// What's the Banner Text Type?

	const handleClick = () => {
		setCount(isCount + 1);
	}
	// Keeping track of button click count

	const showBanner = () => {
		if (isCount === 1) {
			setBannerType('success');
			setBannerText('success');
		} else if (isCount === 2) {
			setBannerType('warning');
			setBannerText('warning');
		} else {
			setBannerType('fail');
			setBannerText('fail');
		}

		setIsBannerVisible(true);
	}
	// Determine when a specific type of banner shows

	const hideBanner = () => {
		setIsBannerVisible(false);
	}
	// Hiding the banner
}
```


### Button  
Renders a button element of a specific size and color based on the passed props. It has a hover state that changes the font-family, color, and size of the button. Sizes are generated based on padding values and adhere to minimum widths. There’s also a `disabled` prop that you can leverage when you need it.

**Examples**

```javascript
<ButtonComponent
	size="sm"
	color="red"
	children="Click me!"
/>

<ButtonComponent
	size="md"
	color="darkRed"
	children="Click me!"
/>

<ButtonComponent
	size="lg"
	color="grey"
	children="Click me!"
/>
```


### Card  
The card component renders a card header, card body, and card footer. All of which can be configured to display whatever you want. The props you need to pass are the card color, card header content, card child content, and card footer content. The card size and layout is dependent on how you configure the Grid component - which we’ll go over later. Setting the card color also changes the card text color automatically and accordingly, with no further styling required.

**Example**

```javascript
<CardComponent
	color="red"
	title="Card Header"
	footer="Card Footer"
>
	Child Content/text goes here
</CardComponent>
```


### Checkbox  
For now this component renders in one size, but it can be display different checkmark and checkbox combinations, with different text colors and custom text. Text appears to the right of the checkbox and use a fixed padding of `2rem`. Refer to the ‘Foundation’ section of this document to see the available syntax.

**Example**

```javascript
<Input_Checkbox_Component
	children="Check"
	textColor="white"
	checkmarkColor="red"
/>
```


### Grid  
The Grid component provides web responsiveness and positional flexibility so that you can organize your content easily and to your liking. It’s backbone lies in setting the `grid-template-columns` and `gap-size`. From there, you'll also need to specify the position of child elements within the grid, by setting its `start` and `end` props. You can also use the `span` prop to just specify the amount of space (in columns) is taken.

**Example**

```javascript
<Grid.Row gap={20} columns={4}>
	<Grid.Col start={1} end={2}>
		<div>This content spans 2 columns</div>
	</Grid.Col>
	<Grid.Col span={2}>
		<div>This content ALSO spans 2 columns</div>
	</Grid.Col>
</Grid.Row>
```

#### 'Auto' feature:  
If you want to reduce or remove the amount of queries you write, the `auto` prop is available to you. Have the `auto` prop set to 'yes' and remove the `Grid.Col` component entirely. Insert your child content/component directly within the `Grid.Row` component, and your grid can now responsibly expand, contract, and wrap child content whenever there are changes to the window/viewport.

**Example**

```javascript
<Grid.Row gap={20} auto='yes'>
	<CardComponent
		color="red"
		title="Card Header"
		footer="Card Footer"
	>
	</CardComponent>
	<CardComponent
		color="red"
		title="Card Header"
		footer="Card Footer"
	>
	</CardComponent>
	<CardComponent
		color="red"
		title="Card Header"
		footer="Card Footer"
	>
	</CardComponent>
	<CardComponent
		color="red"
		title="Card Header"
		footer="Card Footer"
	>
	</CardComponent>
</Grid.Row>
```


### Input  
Arguably the most barebone component of the library, it renders an input field that adheres to the brutalism style and can be displayed in three sizes. It’s up to you on how you implement this component, whether on its own or in a form group. You can set the input field’s background color and labels' typeface through styling classes. The input field’s bottom border and placeholder will remain red out of the box, but you can certainly go in and change it if you really want to. Due to the potential abrasiveness of this color scheme I wanted to limit the kind of color combinations available for accessibility reasons.

**Example**

```javascript
function App() {
  <div className="container justify-content-center pt-3">
  
    <div className="input-group bg-white pu-1">
    
      <h1 className="input-label text-heading fs-2 mu-0 pb-1 text-black">
        Username:
      </h1>
      <Input_Text_Component
        addClass="input-lg bg-white text-body mb-1 "
        id="input"
        placeholder="Username"
        onChange={handleUsernameChange}
        value={isUsername}
      />
      
      <h1 className="input-label text-heading fs-2 mu-0 pb-1 text-black">
        Password:
      </h1>
      <Input_Text_Component
        addClass="input-lg bg-white text-body mb-1"
        id="input"
        placeholder="Password"
        onChange={handlePasswordChange}
        value={isPassword}
      />

      <div className="btn-group d-flex justify-content-btwn pt-2">
      
        <ButtonComponent size="md" color="darkRed" addClass="">
          Login
        </ButtonComponent>
        <ButtonComponent
          size="md"
          color="darkRed"
          addClass=""
          addId="forgot-btn"
        >
          Forgot password?
        </ButtonComponent>
        
      </div>
      
    </div>
    
  </div>
}

export default App;
```

**You can also create an Input and button combination for a more streamlined design by using `input-combo_btn`**

```javascript
<div className="container flex-column">

  <div className="input-combo_btn pt-1">
    <Input_Text_Component
      addClass="input-lg bg-white text-body"
      placeholder="Enter password"
      onChange={handleInputChange}
      value={isInput}
    />
    <ButtonComponent size="md" color="red" onTrigger={showBanner}>
      Submit
    </ButtonComponent>
  </div>
  
</div>
```
> [!NOTE]
> Recommend you use it to contain your actual input and button elements.

### Modal  
A component that renders a UI overlay over the original content. Displays a dark backdrop with a, basically, larger card that contains a header, footer, body, and a close button. It comes out of the box with most of the elements customizable, except for the close button (due to its implementation I’d like to figure out a sensible way to do so).

**Here’s a basic implementation:**

```javascript
<ModalComponent
  isOpen={isModalOpen}
  onClose={handleCloseModal}
  title="Example Modal Title"
  footer={modalFooter}
  addClass="text-white"
  modalColor="bg-red"
  borderColor="border-white"
>
  <p>This is the main content of modal dialog box</p>
  <p>you can put any JSX elements here.</p>
</ModalComponent>;
``` 

> [!NOTE]
> Notice how my footer prop is defined by a JSX element, so that I can insert two additional buttons; one for closing, and the other to trigger a browser alert for demonstration purposes.


### Spinner and Tooltip
These two are straight forward components that provide no further options to customize. The loading spinner renders a darkened overlay over the original content with a red ellipse loading bar. The tooltip renders a text container directly above (cross axis) whatever component or element you choose. For the now it renders a black background with white text.

The **Loading spinner** component has only the `isLoading` prop to pass. Ideally you'd pass a function that determines its visibility.

**Basic Implementation for a Loading Spinner that triggers off a button click:**

```javascript
function App () {
	const [ isLoading, setIsLoading ] = useState(false);

	const timer = () => {
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
		}, 5000);
	}

	<LoadingSpinnerComponent isLoading={isLoading} />
	<button onClick={timer}>Click me!</button>
}
```


The **Tooltip** component only has the `content` prop that allows you to customize whatever message you want to display over the desired element.

**Basic implementation of a Tooltip over a button:**

```javascript
function App () {

	<TooltipComponent content="This does something!">
		<button>Click me!</button>
	</TooltipComponent>
}
```


**Combined Implementation - having a button that's wrapped in a Tooltip component trigger the Loading Spinner component:**

```javascript
function App () {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ data, setData ] = useState(null);
	const [ error, setError ] = useState(null);
	
	const simulateFetch = () => {
		setIsLoading(true);
		setData(null);
		setError(null);
	
		setTimeout(() => {
		  const success = Math.random() > 0.3;
		  setIsLoading(false);
		  if (success) {
			setData("Successfully loaded data!");
			setError(null);
		  } else {
			setError(new Error("Failed to load data"));
			setData(null);
		  }
		}, 2000);
	};
	
	<LoadingSpinnerComponent isLoading={isLoading} />
		<ToolTipComponent content="Click this button to do something">
		   <ButtonComponent
				size="md"
				color="black"
				onTrigger={simulateFetch}
				disabled={isLoading}
			>
				{isLoading ? 'Loading...' : "Fetch Data"}
			</ButtonComponent>
		</ToolTipComponent>
		{data && <p className="text-display text-white fs-3 mu-0">{data}</p>}
	  {error && <p className="text-display text-red fs-3 mu-0">Error: {error.message}</p>}
}
```

> [!NOTE]
> Creating a scenario where we simulate the fetching of data in order to showcase the spinner and allow it fail. Based on the the result we’re going to display that information in traditional markup.

---


That's all for now, thanks for reading. If you did download, let me know what you think, and what kind of improvements you think should be made! I'm open to all constructive feedback!