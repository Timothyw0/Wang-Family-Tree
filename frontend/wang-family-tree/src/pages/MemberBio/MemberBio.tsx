import { lazy, memo, useEffect, useState, Suspense } from "react";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import apiService from "../../interfaces/axiosService";
import { useParams } from "react-router-dom";
import { useLanguageSelector } from "../../hooks/useLanguageSelector";

const Navbar = lazy(() => import("../../components/Navbar"));

const MemberBio = () => {
  const [memberData, setMemberData] = useState<any>({});
  const { memberId } = useParams();
  const { language } = useLanguageSelector();

  useEffect(() => {
    apiService.getPerson(memberId || "0").then(({ data }) => {
      setMemberData(data);
    });
  }, []);

  console.log(memberData);

  return (
    <Suspense fallback="">
      <Navbar />
      <div className="content-center py-5">
        <Card maxW="sm" className="m-auto content-center">
          <CardBody>
            <Image
              src={memberData?.photoURL}
              borderRadius="lg"
              referrerPolicy="no-referrer"
            />
            <Heading size="lg" className="text-center py-2">
              {language === "English"
                ? memberData?.name?.english
                : memberData?.name?.chinese}
            </Heading>
            <Text size="md" className="text-center py-2">
              {language === "English"
                ? memberData?.bio?.english
                : memberData?.bio?.chinese}
            </Text>
          </CardBody>
        </Card>
      </div>
    </Suspense>
  );
};

export default memo(MemberBio);
