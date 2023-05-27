import React, { useState, useEffect } from 'react'
// Components
import Navbar from '../../../components/Navbar/Navbar'
import Spinner from '../../../components/Spinner/Spinner'
import NotFound from '../../NotFound/NotFound'
// Styles
import { Content, Details, Flag, Gray, ListContainer, NavLink } from './Country.styled'
import { UpdateBackgroundColor } from '../Countries.styled'
// API
import * as api from '../../../api/apiCountries'
import { ICountry } from '../../../interfaces/country'
// Router
import { useNavigate, useParams } from 'react-router-dom'

const Country: React.FC = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [country, setCountry] = useState<ICountry>()

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        setError(false)
        setLoading(true)
        const countryAPI = await api.fetchCountry(params.id)
        setCountry(countryAPI)
      } catch (error) {
        console.error(error)
        setError(true)
      }
      setLoading(false)
    }
    fetchCountry()
  }, [params.id])

  return (
    <>
      <Navbar
        bgColor="white"
        shadow
        buttonActive
        buttonText="Bütün Ülkeler"
        onClick={() => navigate('/countries')}
      />
      <Content>
        {loading ? (
          <Spinner spinColor="#5cb1ff" />
        ) : error ? (
          <NotFound />
        ) : (
          <>
            <Details>
              <h2>
                <Gray>Yaygın ismi:</Gray> {country?.name.common}
              </h2>
              <h2>
                <Gray>Resmi ismi:</Gray> {country?.name.official}
              </h2>
              <h2>
                <Gray>Başkent:</Gray> {country?.capital}
              </h2>
              <h2>
                <Gray>Bölge:</Gray> {country?.region}
              </h2>
              <h2>
                <Gray>Alt Bölge:</Gray> {country?.subregion}
              </h2>
              <h2>
                <ListContainer>
                  <Gray>Dil: </Gray>
                  {country?.languages &&
                    Object.values(country.languages).map((language, key) => {
                      return <span key={key}>{language}</span>
                    })}
                </ListContainer>
              </h2>
              <h2>
                <Gray>Ülke Kodu: </Gray>
                {country?.idd && country.idd.suffixes && country.idd.root + country.idd.suffixes[0]}
              </h2>
              <h2>
                <Gray>Para birimi:</Gray>{' '}
                {country?.currencies && Object.keys(country.currencies)[0]}
              </h2>
              <h2>
                <Gray>Nüfus:</Gray> {country?.population}
              </h2>
              <h2>
                <Gray>Alan:</Gray> {country?.area} km&#178;
              </h2>
              <h2>
                <Gray>Saat Dilimi:</Gray> {country?.timezones[0]}
              </h2>
              <h2>
                <Gray>Bağımsızlık:</Gray> {country?.independent ? 'Evet' : 'Hayır'}
              </h2>
              <h2>
                <Gray>Birleşmiş Milletler Üyesi:</Gray> {country?.unMember ? 'Evet' : 'Hayır'}
              </h2>
              <h2>
                <ListContainer>
                  <Gray>Komşuları: </Gray>
                  {country?.borders.map((border, key) => {
                    return (
                      <NavLink key={key} href={`${border}`}>
                        {border}
                      </NavLink>
                    )
                  })}
                </ListContainer>
              </h2>
            </Details>
            <Flag src={country?.flags.png} alt="Flag" />
          </>
        )}
      </Content>
      <UpdateBackgroundColor />
    </>
  )
}

export default Country
