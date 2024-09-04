type Params = {
  params: {
    slug: string;
  };
};

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const test: any = [];
  return test;
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return (
    <>  
      <h1>Slug: {params.slug}</h1>
      <p>Hole Tex</p>
      <p>Welcome to CICD</p>
    </>    
  );
}
