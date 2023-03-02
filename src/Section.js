import React from 'react';
// import { Link } from 'react-router-dom'
// import tt from './tt.js';
// import 'antd/dist/antd.css';
// import xx from '../public/Home.html'
import './css/body.css';
import './css/aside.css';

class Section extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        isAnswerEditorShow: false,
      }
    }
    render() {
        return (
         <section class="w-90vw max-w-xl mx-auto md:px-3">

        <div class="border-b leading-none">
          <div class="flex justify-between md:items-center pb-2 md:pb-0 flex-col md:flex-row ">
            <a href="/d585c28d/test" id="ember225" class="ember-view flex-1 block py-3 text-primary hover:no-underline hover:text-purple-600">
              <div class="flex items-center mb-sm">
                <h1 class="text-md font-semibold mr-1">
                  test
                </h1>

              </div>

              <div class="text-sm text-secondary font-semibold">
                Updated 3 minutes ago
              </div>
            </a>

          </div>
        </div>
    </section> 
    );
    }
}

export default Section