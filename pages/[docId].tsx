type PropsData = {
  name: string;
  role: string;
};
export default function TestServer(props: PropsData) {
  return (
    <div>
      Name {props.name}, Role {props.role}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const data = { name: "rahul", role: "dev" };
    return {
      props: data,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}
