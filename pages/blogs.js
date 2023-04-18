import { useEffect, useState } from "react";


function Blogs() {
  const [data, setData] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${baseUrl}/api/posts/?populate=*`);      
      const json = await res.json();
      setData(json.data);
    }
    fetchData();

  }, []);

  return (
    <div>
      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <section className="text-gray-600 body-font">
          <div className="container py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
            </div>
            <div className="flex flex-wrap -m-4">
              {data.map((post) => (
                <div className="xl:w-1/4 md:w-1/2 p-4" key={post.id}>
                  <div >
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <img className="h-40 rounded w-full object-cover object-center mb-6" 
                      src={post.attributes.image.data.attributes.url}
                      onError={(e) => {e.target.src = "https://dummyimage.com/720x400";}}
                      
                      alt="content" />
                      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{post.attributes.category}</h3>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{post.attributes.title.substring(0, 60)}</h2>
                      <p className="leading-relaxed text-base">{post.attributes.content.substring(0, 50)}...</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



      </div>
    </div>
  );
}

export default Blogs;
