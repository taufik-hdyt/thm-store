

import dynamic from 'next/dynamic';

const MyProfile = dynamic(import('./../partials/Profile'), { ssr: true });
export default MyProfile;
