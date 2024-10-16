import { Spacer, Container, Stack, Row } from "@yakad/ui";
import { QuranConfigProps } from ".";
import { SurahPeriodIcon } from "../../components/SurahPeriodIcon";
import { SurahViewResponseData } from "@ntq/sdk";

const toArabic = (input: any) => input.toLocaleString("ar-EG");

export default function SurahHeader(props: {
    config: QuranConfigProps;
    surahData: SurahViewResponseData;
    bismillahTranslation: string;
}) {
    return (
        <Container
            align="center"
            maxWidth="sm"
            style={{
                padding: "2rem",
            }}
        >
            <Stack style={{ width: "100%", marginBottom: "2rem" }}>
                <Row>
                    <span
                        style={{
                            fontFamily: "sans-serif",
                            fontWeight: "bold",
                            fontSize: "2rem",
                        }}
                    >
                        {"Surah: " + props.surahData.number}
                    </span>
                    <Spacer />
                    <h3
                        style={{
                            fontFamily: "hafs",
                            fontSize: "3rem",
                        }}
                    >
                        {props.surahData.names[0].arabic}
                    </h3>
                    <SurahPeriodIcon period={props.surahData.period} />
                </Row>
                {props.surahData.bismillah_as_first_ayah ? (
                    <>
                        <h3
                            style={{
                                fontFamily: "hafs",
                                textAlign: "center",
                                direction: "rtl",
                                fontSize: "4rem",
                                lineHeight: "4rem",
                                margin: "0",
                            }}
                        >
                            {props.surahData.ayahs[0].text}
                            {" ﴿"}
                            {toArabic(props.surahData.ayahs[0].number)}
                            {"﴾"}
                        </h3>
                        {props.config.translationView ? (
                            <h4
                                style={{
                                    direction: "ltr",
                                    fontFamily: "sans-serif",
                                    opacity: "0.8",
                                }}
                            >
                                {props.bismillahTranslation}
                                {" (" + props.surahData.ayahs[0].number + ")"}
                            </h4>
                        ) : null}
                    </>
                ) : props.surahData.bismillah_status ? (
                    <>
                        <h3
                            style={{
                                fontFamily: "hafs",
                                textAlign: "center",
                                direction: "rtl",
                                fontSize: "4rem",
                                lineHeight: "4rem",
                                margin: "0",
                            }}
                        >
                            {props.surahData.bismillah_text}
                        </h3>
                        {props.config.translationView ? (
                            <h4
                                style={{
                                    direction: "ltr",
                                    fontFamily: "sans-serif",
                                    opacity: "0.8",
                                }}
                            >
                                {props.bismillahTranslation}
                            </h4>
                        ) : null}
                    </>
                ) : null}
            </Stack>
        </Container>
    );
}
