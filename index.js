const Button = props => {
   const {className,buttonText}=props

   return <button className={className}>{buttonText}</button>
}

const element = (
    <div className="social-buttons-container">
     <div className="container">
         <h1 className="heading">Social Buttons</h1>
          <div class="button-container">
             <Button buttonText="Like" className="Like-button" />
             <Button buttonText="Comment" className="Comment-button" />
             <Button buttonText="Share" className="Share-button" />
         </div>
     </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))