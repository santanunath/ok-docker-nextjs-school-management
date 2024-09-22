import Link from 'next/link'

const Homepage = () => {
  return (
    
    <div className=''>
      Homepage
      <br />
      <br />
      <Link href="/sign-in">Sign-in page</Link>
      <br />
      <Link href="/admin">Admin Dashboard</Link>
      <br />
      <Link href="/student">Student Dashboard</Link>
      <br />
      <Link href="/parent">Parent Dashboard</Link>
      <br />
      <Link href="/teacher">Teacher Dashboard</Link>
    </div>
  )
}

export default Homepage
