import React, { useEffect } from 'react';

// Define jQuery interface for better type safety
interface JQuery {
  noConflict(removeAll?: boolean): JQuery;
}

// Define jQuery function type
type JQueryFunction = (selector: string | Element) => JQuery;

// Extend Window interface to include Mailchimp properties
declare global {
  interface Window {
    fnames?: string[];
    ftypes?: string[];
    jQuery?: JQueryFunction & JQuery; // jQuery is both a function and an object with methods
    $mcj?: JQuery;
  }
}

interface MailchimpFormProps {
  className?: string;
  title?: string;
  description?: string;
}

const MailchimpForm: React.FC<MailchimpFormProps> = ({ 
  className = '',
  title = 'Subscribe to Our Newsletter',
  description = 'Stay updated with our latest resources, tips, and exclusive content.'
}) => {
  useEffect(() => {
    // Load Mailchimp validation script
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize Mailchimp validation
    script.onload = () => {
      if (window.jQuery && typeof window.jQuery === 'function') {
        // Initialize Mailchimp arrays
        window.fnames = [];
        window.ftypes = [];
        window.fnames[0] = 'EMAIL';
        window.ftypes[0] = 'email';
        window.fnames[1] = 'FNAME';
        window.ftypes[1] = 'text';
        window.fnames[2] = 'LNAME';
        window.ftypes[2] = 'text';
        window.fnames[3] = 'ADDRESS';
        window.ftypes[3] = 'address';
        window.fnames[4] = 'PHONE';
        window.ftypes[4] = 'phone';
        window.fnames[5] = 'BIRTHDAY';
        window.ftypes[5] = 'birthday';
        window.fnames[6] = 'COMPANY';
        window.ftypes[6] = 'text';
        
        // Set jQuery.noConflict
        window.$mcj = window.jQuery.noConflict(true);
      }
    };

    return () => {
      // Clean up script when component unmounts
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={`mailchimp-form-container ${className}`}>
      <div id="mc_embed_shell">
        <link 
          href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" 
          rel="stylesheet" 
          type="text/css" 
        />
        <style type="text/css">
          {`
            #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
            /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
               We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
          `}
        </style>
        <div id="mc_embed_signup">
          <form 
            action="https://firsthirehub.us16.list-manage.com/subscribe/post?u=2b153cbe0151c03e10f260141&amp;id=3ce9638a70&amp;f_id=00e82ce1f0" 
            method="post" 
            id="mc-embedded-subscribe-form" 
            name="mc-embedded-subscribe-form" 
            className="validate" 
          >
            <div id="mc_embed_signup_scroll">
              {title && <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>}
              {description && <p className="text-gray-600 mb-6">{description}</p>}
              
              <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
              
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                <input 
                  type="email" 
                  name="EMAIL" 
                  className="required email" 
                  id="mce-EMAIL" 
                  required 
                  defaultValue="" 
                />
              </div>
              
              <div className="mc-field-group">
                <label htmlFor="mce-FNAME">First Name </label>
                <input 
                  type="text" 
                  name="FNAME" 
                  className="text" 
                  id="mce-FNAME" 
                  defaultValue="" 
                />
              </div>
              
              <div hidden>
                <input type="hidden" name="tags" value="3549136" />
              </div>
              
              <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>
              
              {/* Hidden field for bot protection - do not remove */}
              <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <input 
                  type="text" 
                  name="b_2b153cbe0151c03e10f260141_3ce9638a70" 
                  tabIndex={-1} 
                  defaultValue="" 
                />
              </div>
              
              <div className="optionalParent">
                <div className="clear foot">
                  <input 
                    type="submit" 
                    name="subscribe" 
                    id="mc-embedded-subscribe" 
                    className="button" 
                    value="Subscribe" 
                  />
                  <p style={{ margin: '0px auto' }}>
                    <a href="http://eepurl.com/i-_77E" title="Mailchimp - email marketing made easy and fun">
                      <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
                        <img 
                          className="refferal_badge" 
                          src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" 
                          alt="Intuit Mailchimp" 
                          style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center' }} 
                        />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MailchimpForm; 