import { useCallback, useState } from 'react';
import Navbar from './components/Navbar';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import Results from './components/Results';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";


function App() {
  const [htmledit, setHtmlEdit] = useState('');
  const [cssedit, setCssEdit] = useState('');
  const [jsedit, setJsEdit] = useState('');

  const onChangeHtml = useCallback((value) => {
    setHtmlEdit(value);
  }, []);

  const onChangeCss = useCallback((value) => {
    setCssEdit(value);
  }, []);

  const onChangeJs = useCallback((value) => {
    setJsEdit(value);
  }, []);

  const srcCode = `
    <html>
    <body>${htmledit}</body>
    <style>${cssedit}</style>
    <script>${jsedit}</script>
    </html>
  `;

  return (
    <>
      <Navbar />
      <div className='p-2'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
          <div className='bg-[#282c34] p-4 rounded-lg shadow'>
            <h2 className='text-lg flex items-center  font-semibold mb-2 text-white'>HTML <FaHtml5 className='text-orange-600 m-2' />
            </h2>
            <CodeMirror
              className='text-xl border-gray-700 border'
              value={htmledit}
              height='342px'
              theme='dark'
              extensions={[html(true)]}
              onChange={onChangeHtml}
            />
          </div>

          <div className='bg-[#282c34] p-4 rounded-lg shadow'>
            <h2 className='text-lg flex items-center font-semibold mb-2 text-white'>CSS<FaCss3Alt className='text-blue-700 m-2' /></h2>
            <CodeMirror
              className='text-xl border-gray-700 border'
              value={cssedit}
              height='342px'
              theme='dark'
              extensions={[css(true)]}
              onChange={onChangeCss}
            />
          </div>

          <div className='bg-[#282c34] p-4 rounded-lg shadow'>
            <h2 className='text-lg flex items-center  font-semibold mb-2 text-white'>JavaScript <IoLogoJavascript className='text-yellow-500 m-2' />
            </h2>
            <CodeMirror
              className='text-xl border-gray-700 border'
              value={jsedit}
              height='342px'
              theme='dark'
              extensions={[javascript(true)]}
              onChange={onChangeJs}
            />
          </div>

          <Results srcCode={srcCode} />
        </div>
      </div>
    </>
  );
}

export default App;