import { useContext, useEffect, useState } from 'react'
import { GraphContainer, ProfileContainer, ProfileInfoSection } from './styles'
import LoginContext from '../../context/LoginContext'
import axios from 'axios'
import { Config } from '../../config'
import { User, UserMeasures } from '../../utils'
import { ResponsiveLine } from '@nivo/line'
import type { Serie } from '@nivo/line'

export const Profile = () => {
    const { token } = useContext(LoginContext) as { token: string }

    const [userInfo, setUserInfo] = useState<User>()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [userTrack, setUserTrack] = useState<Serie[]>([])
    const [infoMessage, ] = useState<string>("Loading user data...")

    useEffect(() => {
        fetchUserData()
    }, [])

    useEffect(() => {
        if (userTrack) {
            console.log("usertrack: ", userTrack)
        }
    }, [userTrack])

    const transformMeasuresToGraphData = (measures: UserMeasures[]) => {
        const data: Serie[] = []
        // sort measures by their date
        measures.sort((a, b) => {
            const dateA = new Date(a.fecha_registro_cont ?? 0)
            const dateB = new Date(b.fecha_registro_cont ?? 0)
            return dateA.getTime() - dateB.getTime()
        }).forEach((measure, index) => {
            const serie: Serie = {
                id: index,
                data: [
                    {
                        x: index,
                        y: measure.imc ?? 0,
                    }
                ]
            }
            data.push(serie)
        })
        return data
    }

    const fetchUserData = async () => {
        try {
            const result = await axios.get('/users/me', {
                data: {
                    token: token,
                    fetchTrack: true
                }
            })

            if (result.data.status === "success") {
                const { data, track } = result.data as { data: User, track: UserMeasures[] }
                setUserInfo(data)
                const rawTrack = transformMeasuresToGraphData(track)
                setUserTrack(rawTrack)
            } else {
                // setInfoMessage("Error fetching user data")
                // create fake user for testing (admin)
                setUserInfo({
                    login: "admin",
                    img: "https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
                    pswd: "admin",
                    name: "admin admin admin",
                    email: "admin@admin.com",
                    active: "admin",
                    activation_code: "admin",
                    priv_admin: "admin",
                    idempresa_fk: 0,
                    id_user: 0,
                    fecha_registro_user: "30/10/2023",
                    id_provincia: 0,
                    movil: "+34666666666",
                })
                const result = transformMeasuresToGraphData([
                    {
                        id_contenido_pk: 0,
                        idenc_hc_pk: 0,
                        fecha_registro_cont: "2023-01-15",
                        idempresa_cont_fk: 0,
                        imc: 24.5,
                        peso: 70,
                        pgc: 20.5,
                    },
                    {
                        id_contenido_pk: 0,
                        idenc_hc_pk: 0,
                        fecha_registro_cont: "2023-02-20",
                        idempresa_cont_fk: 0,
                        imc: 26.3,
                        peso: 75,
                        pgc: 21.2,
                    },
                    {
                        id_contenido_pk: 0,
                        idenc_hc_pk: 0,
                        fecha_registro_cont: "2023-03-10",
                        idempresa_cont_fk: 0,
                        imc: 22.8,
                        peso: 68,
                        pgc: 19.7,
                    },
                    {
                        id_contenido_pk: 0,
                        idenc_hc_pk: 0,
                        fecha_registro_cont: "2023-04-05",
                        idempresa_cont_fk: 0,
                        imc: 27.1,
                        peso: 80,
                        pgc: 22.0,
                    },
                    {
                        id_contenido_pk: 0,
                        idenc_hc_pk: 0,
                        fecha_registro_cont: "2023-05-15",
                        idempresa_cont_fk: 0,
                        imc: 21.6,
                        peso: 65,
                        pgc: 19.2,
                    },
                    {
                        id_contenido_pk: 0,
                        idenc_hc_pk: 0,
                        fecha_registro_cont: "2023-06-20",
                        idempresa_cont_fk: 0,
                        imc: 25.0,
                        peso: 72,
                        pgc: 20.0,
                    },
                    {
                        id_contenido_pk: 0,
                        idenc_hc_pk: 0,
                        fecha_registro_cont: "2023-07-10",
                        idempresa_cont_fk: 0,
                        imc: 23.4,
                        peso: 69,
                        pgc: 19.5,
                    },
                    {
                        id_contenido_pk: 0,
                        idenc_hc_pk: 0,
                        fecha_registro_cont: "2023-08-15",
                        idempresa_cont_fk: 0,
                        imc: 28.6,
                        peso: 85,
                        pgc: 22.7,
                    },
                    {
                        id_contenido_pk: 0,
                        idenc_hc_pk: 0,
                        fecha_registro_cont: "2023-09-05",
                        idempresa_cont_fk: 0,
                        imc: 20.3,
                        peso: 63,
                        pgc: 18.8,
                    },
                    {
                        id_contenido_pk: 0,
                        idenc_hc_pk: 0,
                        fecha_registro_cont: "2023-10-20",
                        idempresa_cont_fk: 0,
                        imc: 25.8,
                        peso: 74,
                        pgc: 20.4,
                    },
                    {
                        id_contenido_pk: 0,
                        idenc_hc_pk: 0,
                        fecha_registro_cont: "2023-11-10",
                        idempresa_cont_fk: 0,
                        imc: 23.9,
                        peso: 71,
                        pgc: 19.8,
                    },
                    {
                        id_contenido_pk: 0,
                        idenc_hc_pk: 0,
                        fecha_registro_cont: "2023-12-15",
                        idempresa_cont_fk: 0,
                        imc: 26.7,
                        peso: 78,
                        pgc: 21.5,
                    },
                    {
                        id_contenido_pk: 0,
                        idenc_hc_pk: 0,
                        fecha_registro_cont: "2024-01-20",
                        idempresa_cont_fk: 0,
                        imc: 22.0,
                        peso: 66,
                        pgc: 19.0,
                    },
                    {
                        id_contenido_pk: 0,
                        idenc_hc_pk: 0,
                        fecha_registro_cont: "2024-02-10",
                        idempresa_cont_fk: 0,
                        imc: 27.4,
                        peso: 82,
                        pgc: 22.3,
                    },
                    {
                        id_contenido_pk: 0,
                        idenc_hc_pk: 0,
                        fecha_registro_cont: "2024-03-15",
                        idempresa_cont_fk: 0,
                        imc: 21.2,
                        peso: 64,
                        pgc: 19.1,
                    },
                    {
                        id_contenido_pk: 0,
                        idenc_hc_pk: 0,
                        fecha_registro_cont: "2024-04-05",
                        idempresa_cont_fk: 0,
                        imc: 29.1,
                        peso: 88,
                        pgc: 23.0,
                    },
                    {
                        id_contenido_pk: 0,
                        idenc_hc_pk: 0,
                        fecha_registro_cont: "2024-05-20",
                        idempresa_cont_fk: 0,
                        imc: 20.7,
                        peso: 62,
                        pgc: 18.6,
                    },
                    {
                        id_contenido_pk: 0,
                        idenc_hc_pk: 0,
                        fecha_registro_cont: "2024-06-10",
                        idempresa_cont_fk: 0,
                        imc: 25.4,
                        peso: 73,
                        pgc: 20.2,
                    },
                    {
                        id_contenido_pk: 0,
                        idenc_hc_pk: 0,
                        fecha_registro_cont: "2024-07-15",
                        idempresa_cont_fk: 0,
                        imc: 23.0,
                        peso: 68,
                        pgc: 19.6,
                    },
                ])
                setUserTrack(result)
            }

        } catch (error) {
            // setInfoMessage("Error fetching user data")
            // set user as a fake user for testing
            setUserInfo({
                login: "admin",
                // use avatar image served statically on a server for testing
                img: "https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
                pswd: "admin",
                name: "admin admin admin",
                email: "admin@admin.com",
                active: "admin",
                activation_code: "admin",
                priv_admin: "admin",
                idempresa_fk: 0,
                id_user: 0,
                fecha_registro_user: "30/10/2023",
                id_provincia: 0,
                movil: "+34666666666",
            })
            const result = transformMeasuresToGraphData([
                {
                    id_contenido_pk: 0,
                    idenc_hc_pk: 0,
                    fecha_registro_cont: "2023-01-15",
                    idempresa_cont_fk: 0,
                    imc: 24.5,
                    peso: 70,
                    pgc: 20.5,
                },
                {
                    id_contenido_pk: 0,
                    idenc_hc_pk: 0,
                    fecha_registro_cont: "2023-02-20",
                    idempresa_cont_fk: 0,
                    imc: 26.3,
                    peso: 75,
                    pgc: 21.2,
                },
                {
                    id_contenido_pk: 0,
                    idenc_hc_pk: 0,
                    fecha_registro_cont: "2023-03-10",
                    idempresa_cont_fk: 0,
                    imc: 22.8,
                    peso: 68,
                    pgc: 19.7,
                },
                {
                    id_contenido_pk: 0,
                    idenc_hc_pk: 0,
                    fecha_registro_cont: "2023-04-05",
                    idempresa_cont_fk: 0,
                    imc: 27.1,
                    peso: 80,
                    pgc: 22.0,
                },
                {
                    id_contenido_pk: 0,
                    idenc_hc_pk: 0,
                    fecha_registro_cont: "2023-05-15",
                    idempresa_cont_fk: 0,
                    imc: 21.6,
                    peso: 65,
                    pgc: 19.2,
                },
                {
                    id_contenido_pk: 0,
                    idenc_hc_pk: 0,
                    fecha_registro_cont: "2023-06-20",
                    idempresa_cont_fk: 0,
                    imc: 25.0,
                    peso: 72,
                    pgc: 20.0,
                },
                {
                    id_contenido_pk: 0,
                    idenc_hc_pk: 0,
                    fecha_registro_cont: "2023-07-10",
                    idempresa_cont_fk: 0,
                    imc: 23.4,
                    peso: 69,
                    pgc: 19.5,
                },
                {
                    id_contenido_pk: 0,
                    idenc_hc_pk: 0,
                    fecha_registro_cont: "2023-08-15",
                    idempresa_cont_fk: 0,
                    imc: 28.6,
                    peso: 85,
                    pgc: 22.7,
                },
                {
                    id_contenido_pk: 0,
                    idenc_hc_pk: 0,
                    fecha_registro_cont: "2023-09-05",
                    idempresa_cont_fk: 0,
                    imc: 20.3,
                    peso: 63,
                    pgc: 18.8,
                },
                {
                    id_contenido_pk: 0,
                    idenc_hc_pk: 0,
                    fecha_registro_cont: "2023-10-20",
                    idempresa_cont_fk: 0,
                    imc: 25.8,
                    peso: 74,
                    pgc: 20.4,
                },
                {
                    id_contenido_pk: 0,
                    idenc_hc_pk: 0,
                    fecha_registro_cont: "2023-11-10",
                    idempresa_cont_fk: 0,
                    imc: 23.9,
                    peso: 71,
                    pgc: 19.8,
                },
                {
                    id_contenido_pk: 0,
                    idenc_hc_pk: 0,
                    fecha_registro_cont: "2023-12-15",
                    idempresa_cont_fk: 0,
                    imc: 26.7,
                    peso: 78,
                    pgc: 21.5,
                },
                {
                    id_contenido_pk: 0,
                    idenc_hc_pk: 0,
                    fecha_registro_cont: "2024-01-20",
                    idempresa_cont_fk: 0,
                    imc: 22.0,
                    peso: 66,
                    pgc: 19.0,
                },
                {
                    id_contenido_pk: 0,
                    idenc_hc_pk: 0,
                    fecha_registro_cont: "2024-02-10",
                    idempresa_cont_fk: 0,
                    imc: 27.4,
                    peso: 82,
                    pgc: 22.3,
                },
                {
                    id_contenido_pk: 0,
                    idenc_hc_pk: 0,
                    fecha_registro_cont: "2024-03-15",
                    idempresa_cont_fk: 0,
                    imc: 21.2,
                    peso: 64,
                    pgc: 19.1,
                },
                {
                    id_contenido_pk: 0,
                    idenc_hc_pk: 0,
                    fecha_registro_cont: "2024-04-05",
                    idempresa_cont_fk: 0,
                    imc: 29.1,
                    peso: 88,
                    pgc: 23.0,
                },
                {
                    id_contenido_pk: 0,
                    idenc_hc_pk: 0,
                    fecha_registro_cont: "2024-05-20",
                    idempresa_cont_fk: 0,
                    imc: 20.7,
                    peso: 62,
                    pgc: 18.6,
                },
                {
                    id_contenido_pk: 0,
                    idenc_hc_pk: 0,
                    fecha_registro_cont: "2024-06-10",
                    idempresa_cont_fk: 0,
                    imc: 25.4,
                    peso: 73,
                    pgc: 20.2,
                },
                {
                    id_contenido_pk: 0,
                    idenc_hc_pk: 0,
                    fecha_registro_cont: "2024-07-15",
                    idempresa_cont_fk: 0,
                    imc: 23.0,
                    peso: 68,
                    pgc: 19.6,
                },
            ])
            setUserTrack(result)
        }
    }

    return (
        <ProfileContainer>
            <h2>PERFIL</h2>
            {userInfo ? (
                <>
                    <ProfileInfoSection>
                        <div className='pfp-container'>
                            <img src={userInfo.img} alt='user image' />
                        </div>
                        <div className='pi-container'>
                            <p className='p-name'>{userInfo.name}</p>
                            <a href={`mailto:${userInfo.email}`} className='p-email'>{userInfo.email}</a>
                            <a href={`tel:${userInfo.movil}`} className='p-phone'>{userInfo.movil}</a>
                        </div>
                    </ProfileInfoSection>
                    <GraphContainer>
                        <div className='linechart'>
                            <ResponsiveLine
                                data={userTrack}
                                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                                xScale={{ type: 'point' }}
                                yScale={{
                                    type: 'linear',
                                    min: 'auto',
                                    max: 'auto',
                                    stacked: true,
                                    reverse: false
                                }}
                                yFormat=" >-.2f"
                                axisTop={null}
                                axisRight={null}
                                axisBottom={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'fecha',
                                    legendOffset: 36,
                                    legendPosition: 'middle'
                                }}
                                axisLeft={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'medida',
                                    legendOffset: -40,
                                    legendPosition: 'middle'
                                }}
                                pointSize={10}
                                pointColor={{ theme: 'background' }}
                                pointBorderWidth={2}
                                pointBorderColor={{ from: 'serieColor' }}
                                pointLabelYOffset={-12}
                                useMesh={true}
                                legends={[
                                    {
                                        anchor: 'bottom-right',
                                        direction: 'column',
                                        justify: false,
                                        translateX: 100,
                                        translateY: 0,
                                        itemsSpacing: 0,
                                        itemDirection: 'left-to-right',
                                        itemWidth: 80,
                                        itemHeight: 20,
                                        itemOpacity: 0.75,
                                        symbolSize: 12,
                                        symbolShape: 'circle',
                                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                                    itemOpacity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]}
                            />
                        </div>
                    </GraphContainer>
                </>
            ) : (
                <p>{infoMessage}</p>
            )}
        </ProfileContainer>
    )
}
