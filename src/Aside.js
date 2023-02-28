import React from 'react';
// import { Link } from 'react-router-dom'
// import tt from './tt.js';
// import 'antd/dist/antd.css';
// import xx from '../public/Home.html'
import './css/body.css';
import './css/aside.css';

class Aside extends React.Component {
    render() {
        return (
            <aside class="bg-primary py-3">
            <div class="flex flex-col md:flex-row items-center justify-between gap-1 md:gap-0 w-90vw max-w-xl mx-auto md:h-42 md:px-3">
              <nav class="tab-bar ml-0 md:-ml-1-1/2">
                <a href="/d585c28d" id="ember24" class="active ember-view tab-bar-tab data-test-dashboard-nav-projects">
                  Projects
                </a>
    
                  <a href="/organizations/d585c28d/usage" id="ember25" class="ember-view tab-bar-tab data-test-dashboard-nav-org-usage">
                    Usage
                  </a>
    
                  <a href="/organizations/d585c28d/integrations" id="ember26" class="ember-view tab-bar-tab data-test-dashboard-nav-org-integrations">
                    Integrations
                  </a>
    
                        <a href="/organizations/d585c28d/browsers" id="ember27" class="ember-view tab-bar-tab data-test-dashboard-nav-org-browsers">
                          Browsers
                        </a>
              </nav>
    
                <a href="/organizations/d585c28d/projects/new" id="ember28" class="ember-view pt-2 md:pt-0 data-test-dashboard-nav-new-project ">
    
                  <button class="btn btn-primary" type="button">
                    <span class="flex items-center">
                      <span class="hidden md:block">
                        <svg class="mr-1" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.416 0h-1.19a9.261 9.261 0 0 0-7.309 3.562.573.573 0 0 0-.25-.062H4.14a4.232 4.232 0 0 0-4.13 3.385.582.582 0 0 0 .457.685l2.74.55 2.672 2.672.548 2.744a.584.584 0 0 0 .687.452 4.232 4.232 0 0 0 3.385-4.13v-.525a.573.573 0 0 0-.062-.25 9.36 9.36 0 0 0 2.86-3.765A9.273 9.273 0 0 0 14 1.773V.583A.583.583 0 0 0 13.416 0zM4.141 4.667h.03c-.21.353-.394.72-.553 1.098l-.476 1.152-1.817-.363a3.056 3.056 0 0 1 2.816-1.887zm5.192 5.192a3.055 3.055 0 0 1-1.887 2.815l-.363-1.817 1.152-.476v.001a9 9 0 0 0 1.098-.553v.03zm3.5-8.086a8.102 8.102 0 0 1-.614 3.101 8.19 8.19 0 0 1-4.428 4.429l-1.237.51-2.367-2.367.51-1.237a8.19 8.19 0 0 1 4.429-4.428 8.1 8.1 0 0 1 3.1-.614h.607v.606z" fill="#fff"></path><path d="M8.75 3.5a1.749 1.749 0 1 0-.002 3.498A1.749 1.749 0 0 0 8.75 3.5zm0 2.333a.583.583 0 1 1-.001-1.165.583.583 0 0 1 0 1.165z" fill="#fff"></path><path d="M.583 14H2.24a3.14 3.14 0 0 0 2.98-2.148.583.583 0 0 0-1.105-.37 1.975 1.975 0 0 1-1.875 1.351H1.167v-1.072c0-.851.544-1.607 1.351-1.875a.583.583 0 1 0-.37-1.105A3.138 3.138 0 0 0 0 11.76v1.656A.583.583 0 0 0 .583 14z" fill="#fff"></path></svg>
                      </span>
                      Create new project
                    </span>
                  </button>
                </a>
            </div>
          </aside>
    );
    }
}

export default Aside