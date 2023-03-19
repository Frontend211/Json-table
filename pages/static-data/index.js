import { pathList } from '../../includes/api-list';


export async function getStaticProps() {
  return {
    redirect: {
      destination: '/static-data/' + pathList[0],
      permanent: false,  // statusCode: 301
    }
  };
}

export default function Empty(){
  
}