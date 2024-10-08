import { useState } from 'react';

export default function App() {
  const [url, setUrl] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [urls, setUrls] = useState([]);
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (err) {
      return false;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    window.api.fetch();
    setUrl('');
  }

  return (
    <>
      <h1>Bookmarker</h1>
      <div className="error-message"></div>
      <section className="add-new-link">
        <form onSubmit={(e) => { handleSubmit(e) }} className="new-link-form">
          <input value={url} onChange={(e) => { setUrl(e.target.value), setIsValid(isValidUrl(url)) }} type="url" className="new-link-url" placeholder="URL" size="100"
            required />
          <input type="submit" className="new-link-submit" value="Submit" disabled={!isValid} />
        </form>
      </section>
      <section className="links">
        {urls.map((url) => <h1>{url.title}</h1>)}
      </section>
      <section className="controls">
        <button className="clear-storage">Clear Storage</button>
      </section>
    </>
  )
}
