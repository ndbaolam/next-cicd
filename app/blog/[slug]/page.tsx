// export async function generateStaticParams() {
//   const paths = [
//     { slug: 'post-1' },
//     { slug: 'post-2' },
//     { slug: 'post-3' },
//   ];

//   return paths.map((path) => ({
//     params: { slug: path.slug },
//   }));
//}

type Params = {
  params: {
    slug: string;
  };
};

// export async function generateMetadata({ params }: Params) {
//   return { title: `Post: ${params.slug}` };
// }

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      My Post: {params.slug}
      <p>HoleTex</p>
    </div>
  );
}
