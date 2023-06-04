import { lazy, memo, useEffect, useState, Suspense } from "react";
import {
  useToast,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
// import apiService from "../../interfaces/axiosService";
import memberJSON from "../../assets/data/familyMembers.json";
import { useNavigate, useParams } from "react-router-dom";
import { useLanguageSelector } from "../../hooks/useLanguageSelector";

const Navbar = lazy(() => import("../../components/Navbar"));

interface LinkObject {
  URL: string;
  chinese: string;
  english: string;
}

interface MemberObject {
  memberId?: string;
  name: {
    chinese: string;
    english: string;
  };
  bio?: {
    chinese: Array<string>;
    english: Array<string>;
  };
  photoURLs?: Array<string>;
  photoURL?: string;
  links?: Array<LinkObject>;
}

const MemberBio = (props: any) => {
  const data: MemberObject = props?.data;
  const [memberData, setMemberData] = useState<MemberObject>(data);
  const { memberId } = useParams();
  const { language, textLang } = useLanguageSelector("bio");
  const navigate = useNavigate();
  const toast = useToast();

  const noPicture =
    "https://wang-photo.s3.ap-southeast-1.amazonaws.com/blank-image.jpg";

  const handleError = () => {
    toast({
      title: textLang?.doesNotExist,
      status: "error",
      position: "top",
      duration: 9000,
      isClosable: true,
    });
    navigate("/");
  };

  const openPicture = (link: string) => {
    window.open(link, "_blank");
  };

  useEffect(() => {
    // if (!memberId) return;
    // apiService
    //   .getPerson(memberId)
    //   .then(({ data }) => {
    // setMemberData(data);
    //   })
    //   .catch(handleError);
    if (!memberId) return;
    const reqPerson = memberJSON?.find((psn) => psn?.memberId === memberId);
    if (reqPerson) {
      setMemberData(reqPerson);
    } else {
      handleError();
    }
  }, []);

  return (
    <Suspense fallback="">
      <Navbar />
      <div className="content-center py-5">
        <Card maxW="lg" className="m-auto content-center">
          <CardBody>
            <SimpleGrid
              minChildWidth="120px"
              spacing={8}
              alignContent="center"
              alignItems="center"
              justifyItems="center"
            >
              {memberData?.photoURLs && memberData?.photoURLs?.length ? (
                memberData.photoURLs.map((photo: any, index: number) => (
                  <Image
                    key={`${memberData?.memberId}-photo-${index}`}
                    src={photo}
                    borderRadius="lg"
                    referrerPolicy="no-referrer"
                    onClick={() => openPicture(photo)}
                    style={{ cursor: "pointer" }}
                  />
                ))
              ) : (
                <Image
                  src={memberData?.photoURL || noPicture}
                  borderRadius="lg"
                  referrerPolicy="no-referrer"
                  onClick={() => openPicture(memberData?.photoURL || noPicture)}
                  style={{ cursor: "pointer" }}
                />
              )}
            </SimpleGrid>
            <Heading size="lg" className="text-center py-2">
              {language === "English"
                ? memberData?.name?.english
                : memberData?.name?.chinese}
            </Heading>
            <Text size="md" className="text-center py-2">
              {language === "English"
                ? memberData?.bio?.english?.map((bio: string) => (
                    <>
                      {bio}
                      <br />
                      <br />
                    </>
                  ))
                : memberData?.bio?.chinese?.map((bio: string) => (
                    <>
                      {bio}
                      <br />
                      <br />
                    </>
                  ))}
            </Text>
            <Text size="md" className="text-center py-2">
              {memberData?.links &&
                memberData.links?.length &&
                memberData.links.map((link: LinkObject) => (
                  <>
                    <a
                      href={link?.URL}
                      target="_blank"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      {language === "English" ? link?.english : link?.chinese}
                    </a>
                    <br />
                  </>
                ))}
            </Text>
          </CardBody>
        </Card>
      </div>
    </Suspense>
  );
};

export default memo(MemberBio);
