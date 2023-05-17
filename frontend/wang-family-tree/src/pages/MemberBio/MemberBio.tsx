import { lazy, memo, useEffect, useState, Suspense } from "react";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import apiService from "../../interfaces/axiosService";
import { useParams } from "react-router-dom";
import { useLanguageSelector } from "../../hooks/useLanguageSelector";

const Navbar = lazy(() => import("../../components/Navbar"));

const MemberBio = ({ data = {} }) => {
  const [memberData, setMemberData] = useState<any>(data);
  const { memberId } = useParams();
  const { language } = useLanguageSelector();

  const noPicture =
    "https://lh3.googleusercontent.com/9s-zOPXFh6SnHz27ihgPr24IToqBQ1_9tdlY3XdVj5VKXg37sBkI0chIRMfn5J-j8i2MkiY8KqtOfnV5mxkb9bbq-kCyGcTuiJtGMlS14jwYPIFEiPVvxcPSz4uCu_z79uXDOyaA_g=w2400";

  useEffect(() => {
    if (!memberId) return;
    apiService.getPerson(memberId).then(({ data }) => {
      setMemberData(data);
    });
  }, []);

  return (
    <Suspense fallback="">
      <Navbar />
      <div className="content-center py-5">
        <Card maxW="sm" className="m-auto content-center">
          <CardBody>
            <Image
              src={memberData?.photoURL || noPicture}
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
