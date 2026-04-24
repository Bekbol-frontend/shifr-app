import { useResponsive } from "@/hooks/useResponsive";
import { Divider, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

function EnInfo() {
  const { isDesktop } = useResponsive();

  return (
    <div>
      <Title
        level={isDesktop ? 2 : 3}
        style={{
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        ALGORITHM “COUPLE”
      </Title>
      <Paragraph>
        This algorithm is designed for text encryption and operates on the basis
        of processing each letter separately. In the algorithm, it is assumed
        that the alphabet consists of <Text strong>M</Text> letters, and all
        calculations are performed according to module <Text strong>M</Text>.
      </Paragraph>
      <div>
        <Paragraph strong>
          E<sub>i</sub> = (x<sub>i</sub> + (-1)<sup>i+1</sup> * k)modM
        </Paragraph>
        <Paragraph strong>
          D<sub>i</sub> = (y<sub>i</sub> - (-1)<sup>i+1</sup> * k)modM
        </Paragraph>
      </div>
      <Divider />
      <div
        style={{
          paddingLeft: 20,
        }}
      >
        <Paragraph strong>
          The encryption process is performed according to the following
          formula:
        </Paragraph>
        <Paragraph>
          <Text strong>E</Text>
          <sub>i</sub> - the alphabetical sequence number of the encrypted
          letter;
        </Paragraph>
        <Paragraph>
          <Text strong>x</Text>
          <sub>i</sub> - the alphabetical sequence number of a letter in
          plaintext;
        </Paragraph>
        <Paragraph>
          <Text strong>i</Text> - the sequence number of the letter within a
          word;
        </Paragraph>
        <Paragraph>
          <Text strong>K</Text> - the encryption key, which is a pre-agreed
          integer value;
        </Paragraph>
        <Paragraph>
          <Text strong>M</Text> - the number of letters in the alphabet
        </Paragraph>
      </div>
      <Divider />
      <div>
        <Paragraph>
          In the process of creating an algorithm, each letter in the plaintext
          is converted into a number according to its position in the alphabet,
          and accordingly, the key value is added or subtracted depending on the
          position of the letter. The resulting remainder, divided by{" "}
          <Text strong>M</Text>, determines the new letter. In this way,
          plaintext is converted into encrypted text.
        </Paragraph>
        <Paragraph>
          This approach, unlike simple Caesar-type encryption, creates a
          different shift value for each letter. Another aspect is that in
          Caesar's algorithm, if one letter were decrypted, the same number of
          letters would be found at once. In this case, since it varies
          depending on odd and even numbers, it will be necessary to work with
          each letter separately, which relatively increases the security level
          of the encrypted text and reduces repetitive patterns. For example, in
          an open text, the same letter is repeated in different places,
          resulting in a different result each time. This property provides a
          certain degree of protection against simple cryptanalysis methods
          based on frequency analysis. This encryption method is primarily
          suitable for use in educational processes, algorithm interpretation,
          and situations requiring the concealment of simple information.
        </Paragraph>
      </div>
    </div>
  );
}

export default EnInfo;
