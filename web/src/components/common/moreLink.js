import React from 'react'
import styled from '@emotion/styled'

/* .more-apply a[href]:focus,.more-apply a[href]:hover{color:#fff;text-decoration:none}

.more-apply a:after{width:47px;height:47px}
[class].more-apply a:after{content:""}
.more a:before,.more-apply a:before{display:inline-block;text-indent:0;text-align:center;vertical-align:top;font-family:icons,Arial,Helvetica,sans-serif;speak:none;font-weight:400;font-style:normal;white-space:nowrap;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;letter-spacing:0;content:'';position:absolute;left:-44px;width:20px;color:#fff;font-size:14px;position:relative;z-index:1;transition:all .2s ease-in-out}
 */

const More = styled.span`
display: block;
white-space: nowrap;

&::after {
  content: ' ';
  clear: both;
  display: block;
  height: 0;
}

 display:inline-block;
 height: 48px;
 line-height: 40px;
 padding-right:24px;
 color:#FF7D73;
 font-weight:600;
 position:relative;
 z-index:2;
 transition:color .2s ease-in-out;

  &:before {
   display:inline-block;
   text-indent:0;
   text-align:center;
   vertical-align:top;
   font-weight:400;
   font-style:normal;
   white-space:nowrap;
   letter-spacing:0;
   content:'';
   position:absolute;
   width:48px;
   position:relative;
   z-index:1;
   transition:all .2s ease-in-out
  }
  &:after {
   content:"";
   position:absolute;
   top:0;
   bottom:0;
   left:0;
   right:0;
   background:#FF7D73;
   color: white;
   border-radius:32px;
   z-index:-1;
   width:32px;
   height:32px;
   transition:all .2s ease-in-out
  }

  &:focus:after, &:hover:after{
    width: 240px;
    color: white;
    height: 100%;
  }
 
  a {
    font-family: 'Sofia Pro',;
    font-size: 16px;
    
    &:hover {
      color: white
    }
  }
`
const MoreLink = ({children}) => (
  <More as='span'>
    <a>{children}</a>
  </More>
)

export default MoreLink
